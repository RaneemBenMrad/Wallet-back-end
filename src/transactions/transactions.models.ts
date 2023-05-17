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
    name: 'Type Transaction',
    description: 'Transaction must  have a  title',
    title: 'Type Transaction',
    default: 'Reward',
  })
  @IsString()
  @Prop()
  type: string;

  @ApiProperty({
    type: String,
    name: 'SenderID',
    description: 'Transaction must  have a  SenderID',
    title: 'SenderID',
    default: 'SenderID',
  })
  @IsString()
  @Prop()
  SenderID: string;

  @ApiProperty({
    type: String,
    name: 'ReceiverID',
    description: 'Transaction must  have a  ReceiverID',
    title: 'ReceiverID',
    default: 'ReceiverID',
  })
  @IsString()
  @Prop()
  ReceiverID: string;

  @ApiProperty({
    type: String,
    name: 'InvoiceID',
    description: 'Transaction must  have a  InvoiceID',
    title: 'InvoiceID',
    default: 'InvoiceID',
  })
  @IsString()
  @Prop()
  InvoiceID: string;

  @ApiProperty({
    type: String,
    name: 'Balance',
    description: 'Transaction must  have a  Balance',
    title: 'Balance',
    default: 'Balance',
  })
  @IsString()
  @Prop()
  Balance: string;

  @ApiProperty({
    type: String,
    name: 'Amount',
    description: 'Transaction must  have a  Amount of pecoinpurchased',
    title: 'Amount of pecoinpurchased',
    default: 'Amount of pecoinpurchased',
  })
  @IsString()
  @Prop()
  Amount: string;

  @ApiProperty({
    type: String,
    name: 'Price',
    description: 'Transaction must  have a  Price',
    title: 'Price',
    default: 'Price',
  })
  @IsString()
  @Prop()
  Price: string;

  @ApiProperty({
    type: String,
    name: 'name',
    description: 'Transaction must  have a  name',
    title: 'name',
    default: 'name',
  })
  @IsString()
  @Prop()
  name: string;

  @ApiProperty({
    type: String,
    name: 'surname',
    description: 'Transaction must  have a  surname',
    title: 'surname',
    default: 'Surname',
  })
  @IsString()
  @Prop()
  Surname: string;
}

export const TransactionsSchema = SchemaFactory.createForClass(Transactions);
