import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateQuizzDto {
  @IsNotEmpty()
  @MinLength(8)
  name: string;

  @IsNotEmpty()
  timer: number;

  @IsNotEmpty()
  theme: string;

  @IsNotEmpty()
  type: string;

  id: number;

  description: string;

  textColor: string;

  backgroundColor: string;

  showTitle: boolean;

  public: boolean;

  createdAt: Date;

  items: Array<Record<string, any>>;
}
