import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { Curso } from 'src/cursos/entities/curso.entity';
@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>
  ) {}
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

  async enroll(estudianteId: string, cursoId: string) {
    // Buscar el estudiante
    const estudiante = await this.estudianteRepository.findOne({
      where: { id: estudianteId },
      relations: ['cursos'],
    });

    if (!estudiante) {
      throw new Error('Estudiante no encontrado');
    }

    // Buscar el curso
    const curso = await this.cursoRepository.findOneBy({id:cursoId});
    if (!curso) {
      throw new Error('Curso no encontrado');
    }

    // Agregar el curso a la lista de cursos del estudiante si no está ya presente
    if (!estudiante.cursos.some((c) => c.id === cursoId)) {
      estudiante.cursos.push(curso);
      await this.estudianteRepository.save(estudiante);
    }

    return estudiante;
  }
}
