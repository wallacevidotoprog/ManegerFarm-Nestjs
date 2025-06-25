import { IsEmail, IsString, MinLength } from 'class-validator';

export class AuthDto {
 @IsEmail({}, { message: 'Informe um e-mail válido' })
  email: string;

  @IsString({ message: 'A senha é obrigatória' })
  password: string;
}
