import {Controller, Get, PathParams} from '@tsed/common';
import * as Express from 'express';
import {Delete, Post} from '@tsed/common/lib/mvc/decorators';
import {User} from '../interfaces/user';
import {UserService} from '../services/userService';

@Controller('/users')
export class UserCtrl {
  constructor(private userService: UserService) {}

  @Get('/:id')
  getUser(@PathParams('id') userId: number): Promise<User> {
    return this.userService.getUser(userId);
  }

  @Get('/')
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Post('/')
  async createUser(request: Express.Request): Promise<User[]> {
    return this.userService.createUser(request.body.username);
  }

  @Delete('/:id')
  async deleteUser(@PathParams('id') userId: number): Promise<User[]> {
    return this.userService.deleteUserById(userId);
  }
}