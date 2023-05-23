import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Document } from 'mongoose';
import { User } from 'src/users/user.models';

import mongoose from 'mongoose';
export type TransactionsDocument = Transactions & Document;
export enum Type {
  SENT = 'Sent',
  RECEIVED = 'Received',
  REWARD = 'Reward',
  PURCHASE = 'Purchase',
  PEPOLLS = 'Pepolls',
}

@Schema({
  timestamps: true,
})
export class Transactions {
  @ApiProperty({
    type: String,
    name: 'owner',
    description: 'Transaction must  have a  owner',
    title: 'owner',
    default: '6464f91f8ad6c179c513cb7f',
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: string;

  @ApiProperty({
    type: String,
    name: 'type',
    description: 'Transaction must  have a  title',
    title: 'type',
    default: 'Reward',
  })
  @IsString()
  @Prop()
  type: string;

  @ApiProperty({
    type: String,
    name: 'sender',
    description: 'Transaction must  have a  sender',
    title: 'sender',
    default: '6464f91f8ad6c179c513cb7f',
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  sender: string;

  @ApiProperty({
    type: String,
    name: 'receiver',
    description: 'Transaction must  have a  receiver',
    title: 'receiver',
    default: '6464f91f8ad6c179c513cb7f',
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  receiver: string;

  @ApiProperty({
    type: String,
    name: 'amount',
    description: 'Transaction must  have a  amount',
    title: 'amount',
    default: 10,
  })
  @Prop({ type: Number })
  amount: number;
}

export const TransactionsSchema = SchemaFactory.createForClass(Transactions);
