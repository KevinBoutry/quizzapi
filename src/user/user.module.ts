import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';

@Module({
  exports: [UserService],
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({})],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
