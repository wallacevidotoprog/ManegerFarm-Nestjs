import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { Response } from 'express';
import { AuthPayload } from 'src/Domain/Models/Types/auth.types';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserRegisteredEvent } from 'src/user/event/user-registered.event';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
    private eventEmitter: EventEmitter2
  ) {}

  public async aLogin(createAuthDto: AuthDto, res: Response) {
    const user = await this.userRepository.findOne({
      where: { email: createAuthDto.email },
    });

    if (!user || !compare(createAuthDto.password, user.password)) {
      throw new UnauthorizedException('Credencial inválida');
    }

    const payload: AuthPayload = {
      sub: user.id,
      email: user.email,
    };

    const token = this.jwtService.sign(payload);

    res.cookie('Authorization', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
  }

  public async aLogout(res: Response<any, Record<string, any>>) {
    res.clearCookie('Authorization', {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'lax',
    });
    return;
  }

  public async aCheckAuth(res: Response<any, Record<string, any>>) {
    const token = res.req.cookies['Authorization'];
    if (!token) {
      throw new UnauthorizedException('Token não encontrado');
    }

    try {
      const payload = this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
  async aRegister(createAuthDto: CreateUserDto, res: Response<any, Record<string, any>>) {

    // console.log('aRegister: ',this.userRepository);
    
    const user = await this.userRepository.findOne({
      where: [{ email: createAuthDto.email }, { cpf: createAuthDto.cpf }],
    });
    if (user) {
      throw new UnauthorizedException('Usuário já cadastrado');
    }

    const hashedPassword = await hash(createAuthDto.password, 10);
    const userEntity = plainToInstance(UserEntity, {
      ...createAuthDto,
      password: hashedPassword,
    });

    const newUser = await this.userRepository.save(userEntity);
    this.eventEmitter.emit('user.registered', new UserRegisteredEvent(userEntity.email, userEntity.name));
  }
}
