import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User{
    @Prop()
   name: string;


    @Prop()
    nickname: string;

    @Prop()
    balance: string;

    @Prop()
    card_number: string;

    @Prop({default:Date.now}) 
    date_added: Date;
   
       
}

export const UserSchema = SchemaFactory.createForClass(User)