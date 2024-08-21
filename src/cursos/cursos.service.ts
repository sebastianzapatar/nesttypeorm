import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';
@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursoResository:Repository<Curso>
  ){}
  async create(createCursoDto: CreateCursoDto) {
    const curso=this.cursoResository.create(createCursoDto);
    await this.cursoResository.save(curso);
    return curso;
  }

  findAll() {
    return this.cursoResository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} curso`;
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return `This action updates a #${id} curso`;
  }

  remove(id: number) {
    return `This action removes a #${id} curso`;
  }
}
