import { IsNotEmpty } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  name: string;

  category: string;

  @IsNotEmpty()
  quizz: any;
}
