import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop()
  password: string;

  @ApiProperty({
    type: String,
    name: 'name',
    description: 'User must  have a  name',
    title: 'name',
    default: 'Tom',
  })
  @IsString()
  @Prop()
  name: string;

  @ApiProperty({
    type: String,
    name: 'nickname',
    description: 'User must  have a  nickname',
    title: 'nickname',
    default: 'nickname',
  })
  @IsString()
  @Prop()
  nickname: string;

  @ApiProperty({
    type: Number,
    name: 'balance',
    description: 'User must  have a  balance',
    title: 'balance',
    default: 200,
  })
  @IsString()
  @Prop()
  balance: number;

  @Prop()
  cardNumber: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
export class UpdateUserDto extends PartialType(User) {}
