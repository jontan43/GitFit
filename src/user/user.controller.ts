import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User|null> {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() userData: Partial<User>): Promise<User> {
    return this.userService.create(userData);
  }
}
