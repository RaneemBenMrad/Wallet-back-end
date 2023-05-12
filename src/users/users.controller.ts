import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.models';
import { UserUpdateDto } from './userUpdater.dto';
import { ApiTags, ApiBody, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Users API')
@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    /*  */
  }

  @Post()
  async createUser(@Body() userDto: User) {
    return this.usersService.createUser(userDto);
  }

  @Get()
  readUser() {
    return this.usersService.readUser();
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateData: UserUpdateDto,
  ): Promise<User> {
    return this.usersService.updateUser(id, updateData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
