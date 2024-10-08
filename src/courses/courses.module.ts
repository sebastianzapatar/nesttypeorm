import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { StudenModule } from 'src/studen/studen.module';
@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports:[TypeOrmModule.forFeature([Course])]
})
export class CoursesModule {}
