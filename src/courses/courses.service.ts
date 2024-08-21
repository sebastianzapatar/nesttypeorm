import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CoursesService {

  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>
  ){}
  async create(createCourseDto: CreateCourseDto) {
    const course=await this.courseRepository.create(createCourseDto);
    await this.courseRepository.save(createCourseDto);
    return course;
  }

  async findAll() {
    return await this.courseRepository.find({});
  }

  findOne(id: string) {
    return this.courseRepository.findOneBy({id:id});
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
