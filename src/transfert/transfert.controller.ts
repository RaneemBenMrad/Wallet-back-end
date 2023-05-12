import { Body, Controller, Delete, Get, Post, Put, Param} from '@nestjs/common';
import { TransfertService } from './transfert.service';
import { TransfertUpdateDto } from './transfertUpdater.dto';
import { Transfert } from './transfert.models';
@Controller()
export class TransfertController {
  constructor(private readonly transfertService: TransfertService) {}


    @Post()
    async createTransfert(@Body() transfertDto: Transfert){
      return this.transfertService.createTransfert(transfertDto)
    }
  
    @Get()
    readTransfert(){
      return this.transfertService.readTransfert()
    }
  
    @Put(':id')
    async updateTransfert(
      @Param('id') id:string,@Body() updateData:TransfertUpdateDto
      ):Promise<Transfert>{
      return this.transfertService.updateTransfert(id,updateData)
    } 
  
    @Delete(':id')
      async deleteTransactions(@Param('id') id:string){
        return this.transfertService.deleteTransfert(id)
      }
      
      
}
