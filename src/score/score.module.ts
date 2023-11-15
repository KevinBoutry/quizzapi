import { Module } from '@nestjs/common';
import { Score } from './score.entity';
import { ScoreController } from './controller/score.controller';
import { ScoreService } from './service/score.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  exports: [ScoreService],
  imports: [TypeOrmModule.forFeature([Score])],
  providers: [ScoreService],
  controllers: [ScoreController],
})
export class ScoreModule {}
