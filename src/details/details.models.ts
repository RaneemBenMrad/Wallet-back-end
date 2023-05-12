import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DetailsDocument = Details & Document

@Schema()
export class Details{


    @Prop({default:Date.now}) 
    date_added: Date;
  
    @Prop()
        Entity_name:string;
    @Prop()
        code:string;
    @Prop()
        Name_surname:string;
    @Prop()
        code2:string;       
    @Prop()
       Invoice_ID:string;
    @Prop()
         solde:string;
    @Prop()
        type:string;
  
}

export const DetailsSchema = SchemaFactory.createForClass(Details)