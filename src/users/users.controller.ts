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
import { UsersService } from './users.service';
import { User } from './user.models';
import { UserUpdateDto } from './userUpdater.dto';
import { ApiTags, ApiBody, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@ApiTags('Users API')
@UseGuards(AuthGuard())
@ApiBearerAuth('Bearer')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    /*  */
  }

  @Get('all')
  async all() {
    return this.usersService.all();
  }

  @Get('byToken')
  readUser(@Req() request: any) {
    return this.usersService.readUser(request.user?._id);
  }

  @Post('purchase')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        pecoin: {
          type: 'number',
          default: 20,
        },
      },
    },
  })
  async purchase(@Req() request: any, @Body() bodyObject): Promise<any> {
    return this.usersService.purchase(request.user?._id, bodyObject?.pecoin);
  }

  @Post('transfer')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        pecoin: {
          type: 'number',
          default: 20,
        },
        to: {
          type: 'string',
          default: '646899e370dc94e460bea69f',
        },
      },
    },
  })
  async transfer(@Req() request: any, @Body() bodyObject): Promise<any> {
    return this.usersService.transfer(
      request.user?._id,
      bodyObject?.pecoin,
      bodyObject?.to,
    );
  }
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateData: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(id, updateData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
