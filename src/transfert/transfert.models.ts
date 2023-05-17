import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TransfertDocument = Transfert & Document

@Schema()
export class Transfert{


    @Prop({default:Date.now}) 
    date_added: Date;
  
    @Prop()
        amount_Pecoins:number;
    @Prop()
        Price:number;
    @Prop()
        password:string;
    @Prop()
        D17:string;       
    @Prop()
        E_dinar:string;
    @Prop()
         Creditcard:string;
    @Prop()
        Floussi:string;
    @Prop()
        card_owner:string;       
    @Prop()
        card_number:number;
    @Prop()
        expiry_date:Date;
    @Prop()
        cvv:number;
}

export const TransfertSchema = SchemaFactory.createForClass(Transfert)