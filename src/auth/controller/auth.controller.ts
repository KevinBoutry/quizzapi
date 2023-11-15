import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AuthDto } from '../dto/auth.dtos';
import { AuthGuard } from '../guard/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() dto: AuthDto) {
    return this.authService.signIn(dto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    console.log('user ', req);
    return await this.authService.getUser(req.user.sub);
  }
}
