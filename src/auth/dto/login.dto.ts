import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    type: String,
    name: 'email',
    description: 'Auth must  have a  email',
    title: 'email',
    default: 'Tom@t.com',
  })
  @IsNotEmpty()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  @ApiProperty({
    type: String,
    name: 'password',
    description: 'Auth must  have a  password',
    title: 'password',
    default: '123',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}
