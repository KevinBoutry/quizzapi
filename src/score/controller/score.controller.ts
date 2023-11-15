import { Controller, Post, Body, Put, Get, Param } from '@nestjs/common';
import { ScoreService } from '../service/score.service';

@Controller('score')
export class ScoreController {
  constructor(private ScoreService: ScoreService) {}

  @Get('id/:user')
  async getScoresByUserId(@Param('user') user) {
    return await this.ScoreService.getScoresByUserId(user);
  }

  @Post('publish')
  async create(@Body() data) {
    return await this.ScoreService.create(data);
  }

  @Put('update')
  async updateScore(@Body() data) {
    return await this.ScoreService.updateScore(data);
  }

  @Put('stars')
  async updateStars(@Body() data) {
    return await this.ScoreService.updateStars(data);
  }

  @Get('played/:quizz/:user')
  async alreadyPlayed(@Param('quizz') quizz, @Param('user') user) {
    return await this.ScoreService.alreadyPlayed({ quizz, user });
  }
}
