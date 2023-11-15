import { IsNotEmpty, MinLength } from 'class-validator';

export class ScoreDto {
  @IsNotEmpty()
  score: number;

  @IsNotEmpty()
  maxScore: number;

  time: number;

  id: number;

  createdAt: Date;

  @IsNotEmpty()
  quizz: any;

  @IsNotEmpty()
  user: any;
}
