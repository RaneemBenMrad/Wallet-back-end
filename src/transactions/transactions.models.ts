import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TransactionsDocument = Transactions & Document

@Schema()
export class Transactions{


    @Prop({default:Date.now}) 
    date_added: Date;
  
    @Prop()
        rewards:number;
    @Prop()
        spent:number;
    @Prop()
        pepolls:number;
    @Prop()
        purchase:number;       
    @Prop()
        recieved:number;
    @Prop()
         sent:number;
    @Prop()
        overall:number;
  
}

export const TransactionsSchema = SchemaFactory.createForClass(Transactions)