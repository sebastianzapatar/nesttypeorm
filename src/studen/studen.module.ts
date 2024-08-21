import { Module } from '@nestjs/common';
import { StudenService } from './studen.service';
import { StudenController } from './studen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Studen } from './entities/studen.entity';
import { CoursesModule } from 'src/courses/courses.module';
@Module({
  controllers: [StudenController],
  providers: [StudenService],
  imports:[TypeOrmModule.forFeature([Studen])]
})
export class StudenModule {}
