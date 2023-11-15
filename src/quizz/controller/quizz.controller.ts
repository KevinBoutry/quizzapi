import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  UseInterceptors,
  UploadedFiles,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizzService } from '../service/quizz.service';
import { CreateQuizzDto } from '../dto/quizz.dto';
import { Quizz } from '../quizz.entity';
import { Item } from '../item.entity';
import { Score } from '../../score/score.entity';
import { FilesInterceptor } from '@nestjs/platform-express';
import { GenericFilter } from 'src/pagination/generic-filter';

@Controller('quizz')
export class QuizzController {
  constructor(private QuizzService: QuizzService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async getAll(@Query() filter: GenericFilter) {
    return await this.QuizzService.getAll(filter);
  }

  @Get('recent')
  async getRecent() {
    return await this.QuizzService.getRecent();
  }

  @Get('trending')
  async getTrending() {
    return await this.QuizzService.getTrending();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Quizz> {
    return await this.QuizzService.getById(id);
  }

  @Get('themes/:theme')
  async getByTheme(@Param('theme') theme: string) {
    return await this.QuizzService.getByTheme(theme);
  }

  @Post('create')
  @UseInterceptors(FilesInterceptor('image'))
  async create(@UploadedFiles() image, @Body('data') data) {
    return await this.QuizzService.create(image, JSON.parse(data));
  }
}
