import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    name: 'name',
    description: 'User must  have a  title',
    title: 'name',
    default: 'Tom',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    name: 'nickname',
    description: 'User must  have a  title',
    title: 'nickname',
    default: 'nickname',
  })
  @IsString()
  nickname: string;

  @ApiProperty({
    type: String,
    name: 'balance',
    description: 'User must  have a  title',
    title: 'balance',
    default: 200,
  })
  @IsString()
  balance: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
