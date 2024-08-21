import { Injectable } from '@nestjs/common';
import { CreateStudenDto } from './dto/create-studen.dto';
import { UpdateStudenDto } from './dto/update-studen.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Studen } from './entities/studen.entity';
@Injectable()
export class StudenService {
  constructor(
    @InjectRepository(Studen)
    private readonly studenRepository:Repository<Studen>
  ){}
  async create(createStudenDto: CreateStudenDto) {
    const student=await this.studenRepository.create(createStudenDto)
    await this.studenRepository.save(student);
    return student;
  }

  async findAll() {
    return await this.studenRepository.find({});
  }

  async findOne(id: string) {
    return await this.studenRepository.findOneBy({id:id});
  }

  update(id: number, updateStudenDto: UpdateStudenDto) {
    return `This action updates a #${id} studen`;
  }

  remove(id: number) {
    return `This action removes a #${id} studen`;
  }
}
