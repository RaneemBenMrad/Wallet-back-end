import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Transfert,TransfertDocument } from './transfert.models';

@Injectable()
export class TransfertService {
  constructor(
    @InjectModel('transfert') private readonly transfertModel: Model<TransfertDocument>,
    
  ){}

 
  
  async createTransfert(transfert: Transfert): Promise<Transfert>  {
    const newTransfert = new this.transfertModel(transfert)
    return newTransfert.save()
  }


  // reading the user collection
  async readTransfert() {
    return this.transfertModel.find({})
    .then(user=>{return user})
    .catch((err)=>console.log(err))
  }

  // upadting the data
  async updateTransfert(id,data):Promise<Transfert>{
    return this.transfertModel.findByIdAndUpdate(id,data,{new:true})
  }

  // deleting the data
  async deleteTransfert(id){
    return this.transfertModel.findByIdAndRemove(id)
  }
 
  
}
