import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

import { SortOrder } from './sort-order.enum';
import { Transform } from 'class-transformer';

export class GenericFilter {
  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  @IsOptional()
  @IsNumber({}, { message: ' "page" attribute should be a number' })
  public page?: number = 1;

  @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  @IsOptional()
  @IsNumber({}, { message: ' "pageSize" attribute should be a number ' })
  public pageSize?: number = 3;

  @IsOptional()
  @IsString()
  public theme?: string;

  @IsOptional()
  @IsString()
  public name?: string;

  @IsOptional()
  @IsString()
  public creatorId?: number;
}
