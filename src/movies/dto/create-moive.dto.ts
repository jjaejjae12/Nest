import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMoiveDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsOptional()
  @IsString({ each: true })
  readonly genrs: string[];
}
