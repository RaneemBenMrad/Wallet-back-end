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
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';

@ApiTags('Users API')
@Controller('users')
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
    @Body() updateData: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUser(id, updateData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
