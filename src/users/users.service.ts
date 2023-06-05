import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, UserDocument } from './user.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { log } from 'console';
import { TransactionsDocument } from 'src/transactions/transactions.models';
import { TransactionsService } from 'src/transactions/transactions.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
    private readonly transactionsService: TransactionsService,
  ) {
    /*  */
  }

  // creating a user
  async all(): Promise<any[]> {
    return this.userModel.find({});
  }

  // reading the user collection
  async readUser(id: string) {
    return this.userModel
      .findOne({ _id: id })
      .then((user) => {
        return user;
      })
      .catch((err) => console.log(err));
  }

  // upadting the data
  async updateUser(id, data): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, data, { new: true });
  }

  async purchase(id, pecoin) {
    await this.userModel.findOneAndUpdate(
      { _id: id },
      { $inc: { balance: pecoin } },
      { new: true },
    );
    return await this.transactionsService.createTransactions({
      amount: pecoin,
      owner: id,
      receiver: id,
      sender: '646bec86fb681e5e92741ea6',
      type: 'Purchase',
      display: '646bec86fb681e5e92741ea6',
    });
  }

  async transfer(me, pecoin, to) {
    const sender = await this.userModel.findOne({ _id: me });
    if (sender?.balance > pecoin) {
      //send from me
      await this.userModel.findOneAndUpdate(
        { _id: me },
        { $inc: { balance: -pecoin } },
        { new: true },
      );

      const sent = this.transactionsService.createTransactions({
        amount: pecoin,
        owner: me,
        receiver: to,
        sender: me,
        type: 'Sent',
        display: to,
      });

      //receive for receiver
      await this.userModel.findOneAndUpdate(
        { _id: to },
        { $inc: { balance: +pecoin } },
        { new: true },
      );

      this.transactionsService.createTransactions({
        amount: pecoin,
        owner: to,
        receiver: to,
        sender: me,
        type: 'Receive',
        display: me,
      });
      return sent;
    } else {
      throw new UnauthorizedException('Invalid email or password');
    }
  }

  // deleting the data
  async deleteUser(id) {
    return this.userModel.findByIdAndRemove(id);
    //  return this.userModel.deleteMany({});
  }
}
