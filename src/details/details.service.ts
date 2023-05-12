import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {Details,DetailsDocument } from '../details/details.models';

@Injectable()
export class DetailsService {
  constructor(
    @InjectModel('details') private readonly detailsModel: Model<DetailsDocument>,
   
  ){}


 
  async createDetails(details: Details): Promise<Details>  {
    const newDetails = new this.detailsModel(details)
    return newDetails.save()
  }


  // reading the user collection
  async readDetails() {
    return this.detailsModel.find({})
    .then(user=>{return user})
    .catch((err)=>console.log(err))
  }

  // upadting the data
  async updateDetails(id,data):Promise<Details>{
    return this.detailsModel.findByIdAndUpdate(id,data,{new:true})
  }

  // deleting the data
  async deleteDetails(id){
    return this.detailsModel.findByIdAndRemove(id)
  }
  
}