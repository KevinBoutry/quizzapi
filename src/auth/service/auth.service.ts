import * as argon from 'argon2';

import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthDto } from '../dto/auth.dtos';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signIn(dto: AuthDto): Promise<{ access_token: string }> {
    const user = await this.userService.getOneByUsername(dto.username);
    const passwordcheck = argon.verify(user.password, dto.password);
    if (!passwordcheck) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.id };
    const secret = this.config.get('JWT_SECRET');
    return {
      access_token: await this.jwt.signAsync(payload, {
        secret: secret,
      }),
    };
  }

  async getUser(id) {
    return await this.userService.getOneById(id);
  }
}
