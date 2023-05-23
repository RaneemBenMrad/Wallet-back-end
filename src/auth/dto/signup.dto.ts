import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @ApiProperty({
    type: String,
    name: 'name',
    description: 'Auth must  have a  name',
    title: 'name',
    default: 'Tom',
  })
  @IsString()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    type: String,
    name: 'email',
    description: 'Auth must  have a  email',
    title: 'email',
    default: 'Tom@t.com',
  })
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
  @MinLength(3)
  readonly password: string;

  @ApiProperty({
    type: String,
    name: 'nickname',
    description: 'Auth must  have a  nickname',
    title: 'nickname',
    default: 'Tom',
  })
  @IsString()
  @IsNotEmpty()
  @IsString()
  readonly nickname: string;
}
