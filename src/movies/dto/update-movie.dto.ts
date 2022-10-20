import { PartialType } from '@nestjs/mapped-types';
import { CreateMoiveDto } from './create-moive.dto';

export class UpdateMoiveDto extends PartialType(CreateMoiveDto) {}
