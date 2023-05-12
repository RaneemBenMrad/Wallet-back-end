import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Transaction extends Document {
  @Prop()
  montant: number;

  @Prop()
  add: number;

  @Prop()
  send: number;

  @Prop()
  buy: number;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
