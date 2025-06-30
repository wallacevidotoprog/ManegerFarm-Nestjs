import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, hash } from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { Response } from 'express';
import { Role } from 'src/Domain/Models/Emun/db.enum';
import { AuthPayload } from 'src/Domain/Models/Types/auth.types';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserKeyEvent, UserRegisteredEvent } from 'src/user/event/user-registered.event';
import { Repository } from 'typeorm';
import { ActiveAccountDto, AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
    private eventEmitter: EventEmitter2,
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

    return {
      user_name:user.name
    }
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

  async aRegister(createAuthDto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: [{ email: createAuthDto.email }, { cpf: createAuthDto.cpf }],
    });
    if (user) {
      throw new UnauthorizedException('Usuário já cadastrado');
    }

    const hashedPassword = await hash(createAuthDto.password, 10);
    const userEntity = plainToInstance(UserEntity, {
      ...createAuthDto,
      role: Role.OWNER,
      active: false,
      password: hashedPassword,
    });

    const newUser = await this.userRepository.save(userEntity);

    this.eventEmitter.emit('user.key', new UserKeyEvent(createAuthDto.email, createAuthDto.name, newUser.id.split('-')[0]));

    return 'OK BROT';
  }
  async aActiveAccount(activeAccountDto: ActiveAccountDto) {
    const user = await this.userRepository.findOne({
      where: [{ email: activeAccountDto.email }],
    });

    if (!user) {
      throw new Error('Usuário não cadastrado.');
    }
    const key = user.id.split('-')[0];


    if (key != activeAccountDto.key) {
      throw new Error('Key inválida..');
    }

    await this.userRepository.update(user.id, { active: true });

    this.eventEmitter.emit('user.registered', new UserRegisteredEvent(user.email, user.name));
  }
}
