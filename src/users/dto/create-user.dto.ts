import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    name: 'name',
    description: 'User must  have a  name',
    title: 'name',
    default: 'Tom',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    name: 'nickname',
    description: 'User must  have a  nickname',
    title: 'nickname',
    default: 'nickname',
  })
  @IsString()
  nickname: string;

  @ApiProperty({
    type: Number,
    name: 'balance',
    description: 'User must  have a  balance',
    title: 'balance',
    default: 200,
  })
  @IsString()
  balance: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
