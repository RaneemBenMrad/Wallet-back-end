import { Body, Controller, Delete, Get, Post, Put, Param} from '@nestjs/common';
import { DetailsService } from './details.service';
import { DetailsUpdateDto } from './detailsUpdater.dto';
import { Details } from './details.models';
@Controller()
export class DetailsController {
  constructor(private readonly detailsService: DetailsService) {}


  @Post()
  async createDetails(@Body() detailsDto: Details){
    return this.detailsService.createDetails(detailsDto)
  }

  @Get()
  readDetails(){
    return this.detailsService.readDetails()
  }

  @Put(':id')
  async updateDetails(
    @Param('id') id:string,@Body() updateData:DetailsUpdateDto
    ):Promise<Details>{
    return this.detailsService.updateDetails(id,updateData)
  } 

  @Delete(':id')
    async deleteDetails(@Param('id') id:string){
      return this.detailsService.deleteDetails(id)
    }
      
      
}
