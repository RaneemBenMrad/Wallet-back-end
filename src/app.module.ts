import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TransController } from './transactions/transactions.controller';
import { TransactionsService } from './transactions/transactions.service';
import { TransfertController } from './transfert/transfert.controller';
import { TransfertService } from './transfert/transfert.service';
import { DetailsController } from './details/details.controller';
import { DetailsService } from './details/details.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users/user.models';
import { TransactionsSchema } from './transactions/transactions.models';
import { TransfertSchema } from './transfert/transfert.models';
import { DetailsSchema } from './details/details.models';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      //   'mongodb+srv://brad123:brad123@cluster0.3f2cx.mongodb.net/?retryWrites=true&w=majority',
      // access chaw9i
      // access ramin
      // put url in .env file
      process.env.db_url,
    ),
    MongooseModule.forFeature([
      { name: 'user', schema: UserSchema },
      { name: 'transactions', schema: TransactionsSchema },
      { name: 'details', schema: DetailsSchema },
      { name: 'transfert', schema: TransfertSchema },
    ]),
    AuthModule,
  ],
  controllers: [
    UsersController,
    TransController,
    DetailsController,
    TransfertController,
  ],
  providers: [
    UsersService,
    TransactionsService,
    DetailsService,
    TransfertService,
  ],
  // exports: [UsersService],
})
export class AppModule {
  /*  */
}
