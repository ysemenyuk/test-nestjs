import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  //   @Get(':id')
  //   async findOne(@Param('id', ParseIntPipe) id: number) {
  //     return new UserEntity(await this.usersService.findOne(id));
  //   }

  //   @Patch(':id')
  //   async update(
  //     @Param('id', ParseIntPipe) id: number,
  //     @Body() updateUserDto: UpdateUserDto,
  //   ) {
  //     return new UserEntity(await this.usersService.update(id, updateUserDto));
  //   }

  //   @Delete(':id')
  //   async remove(@Param('id', ParseIntPipe) id: number) {
  //     return new UserEntity(await this.usersService.remove(id));
  //   }
}
