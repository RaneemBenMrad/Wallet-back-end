import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Transactions, TransactionsDocument } from './transactions.models';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel('transactions')
    private readonly transactionsModel: Model<TransactionsDocument>,
  ) {}

  async createTransactions(transactions: Transactions): Promise<Transactions> {
    const newTransactions = new this.transactionsModel(transactions);
    return newTransactions.save();
  }

  // reading the user collection
  async readTransactions() {
    return this.transactionsModel
      .find({})
      .populate('owner')
      .populate('sender')
      .populate('receiver')
      .populate('display')
      .sort({ createdAt: -1 })
      .then((user) => {
        return user;
      })
      .catch((err) => console.log(err));
  }
  async readTransactionByToken(id) {
    return await this.transactionsModel
      .find({ owner: id })
      .populate('owner')
      .populate('sender')
      .populate('receiver')
      .populate('display')
      .sort({ createdAt: -1 });
  }
  // upadting the data
  async updateTransactions(id, data): Promise<Transactions> {
    return this.transactionsModel.findByIdAndUpdate(id, data, { new: true });
  }

  // deleting the data
  async deleteTransactions(id) {
    return this.transactionsModel.findByIdAndRemove(id);
  }
}
