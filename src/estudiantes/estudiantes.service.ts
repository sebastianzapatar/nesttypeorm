import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository:Repository<Estudiante>
  ){}
  async create(createEstudianteDto: CreateEstudianteDto) {
    const estudiante=this.estudianteRepository.create(createEstudianteDto)
    await this.estudianteRepository.save(estudiante);
    return estudiante;
  }

  findAll() {
    return this.estudianteRepository.find({relations:['cursos']});
  }

  findOne(id: string) {
    return this.estudianteRepository.findOne({
      where:{id},
      relations:['cursos']});
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
