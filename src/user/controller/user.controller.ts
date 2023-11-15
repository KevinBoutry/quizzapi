import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  Body,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { User } from '../user.entity';
import { CreateUserDto } from '../dto/user.dtos';
import { AuthGuard } from '../../auth/guard/auth.guard';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.UserService.getAll();
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async getProfile(@Request() req) {}

  @Get(':userid')
  async getOne(@Param('userid', ParseIntPipe) userid: number): Promise<User> {
    return await this.UserService.getOneById(userid);
  }

  @Post('signup')
  @UsePipes(ValidationPipe)
  async create(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return await this.UserService.create(createUserDto);
  }

  @Delete(':userid')
  async delete(
    @Param('userid', ParseIntPipe) userid: number,
  ): Promise<DeleteResult> {
    return await this.UserService.delete(userid);
  }

  @Put(':userid')
  async update(
    @Param() userid: number,
    @Body() user: User,
  ): Promise<UpdateResult> {
    return await this.UserService.update(userid, user);
  }
}
