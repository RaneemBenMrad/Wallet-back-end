import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsUpdateDto } from './transactionsUpdater.dto';
import { Transactions } from './transactions.models';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard())
@ApiBearerAuth('Bearer')
@ApiTags('Transaction API')
@Controller('Transaction')
export class TransController {
  constructor(private readonly transService: TransactionsService) {
    /*  */
  }

  @Post()
  async createTransactions(@Body() transactionsDto: Transactions) {
    return this.transService.createTransactions(transactionsDto);
  }

  @Get('all')
  readTransactions() {
    return this.transService.readTransactions();
  }
  @Get('byToken')
  readTransactionByToken(@Req() request: any) {
    return this.transService.readTransactionByToken(request.user?._id);
  }

  @Put(':id')
  async updateTransactions(
    @Param('id') id: string,
    @Body() updateData: TransactionsUpdateDto,
  ): Promise<Transactions> {
    return this.transService.updateTransactions(id, updateData);
  }

  @Delete(':id')
  async deleteTransactions(@Param('id') id: string) {
    return this.transService.deleteTransactions(id);
  }
}
