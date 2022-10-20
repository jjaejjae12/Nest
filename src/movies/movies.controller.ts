import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMoiveDto } from './dto/create-moive.dto';
import { UpdateMoiveDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search') // search?year=2022
  search(@Query('year') seachingYear: string) {
    return `검색하는중${seachingYear}`;
  }
  //파라미터값을 @Param으로 가지고옴
  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    console.log(typeof movieId);
    return this.moviesService.getOne(movieId);
  } // movies/14

  @Post()
  create(@Body() movieData: CreateMoiveDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMoiveDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
