import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Document } from 'mongoose';

export type TransactionsDocument = Transactions & Document;

@Schema()
export class Transactions {
  @Prop({ default: Date.now })
  date_added: Date;

  @ApiProperty({
    type: String,
    name: 'type',
    description: 'Transaction must  have a  title',
    title: 'type',
    default: 'Tom',
  })
  @IsString()
  @Prop()
  type: string;
}

export const TransactionsSchema = SchemaFactory.createForClass(Transactions);
