import { Item } from './item.entity';
import { Module } from '@nestjs/common';
import { Quizz } from './quizz.entity';
import { QuizzController } from './controller/quizz.controller';
import { QuizzService } from './service/quizz.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  exports: [QuizzService],
  imports: [TypeOrmModule.forFeature([Quizz, Item])],
  providers: [QuizzService],
  controllers: [QuizzController],
})
export class QuizzModule {}
