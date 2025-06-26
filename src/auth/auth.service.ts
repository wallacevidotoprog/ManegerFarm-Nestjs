import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import { Response } from 'express';
import { AuthPayload } from 'src/Domain/Models/Types/auth.types';
import { PrismaService } from 'src/Prisma/prisma.service';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly service: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  public async aLogin(createAuthDto: AuthDto, res: Response) {
    const user = await this.service.user.findUnique({
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
    const user = await this.service.user.findFirst({
      where: {
        OR: [{ email: createAuthDto.email }, { cpf: createAuthDto.cpf }],
      },
    });

    if (user) {
      throw new UnauthorizedException('Usuário já cadastrado');
    }

    const hashedPassword = await hash(createAuthDto.password, 10);

    const userData: Prisma.UserCreateInput = {
      name: createAuthDto.name,
      cpf: createAuthDto.cpf,
      email: createAuthDto.email,
      phone: createAuthDto.phone,
      role: createAuthDto.role,
      password: hashedPassword,
      active: createAuthDto.active,
      ...(createAuthDto.employeeId && { employee: { connect: { id: createAuthDto.employeeId } } }),
      ...(createAuthDto.address && {
        address: {
          create: createAuthDto.address,
        },
      }),
    };

    const newUser = await this.service.user.create({ data: userData });
  }
}
