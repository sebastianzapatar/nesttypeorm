import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
@Module({
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
  imports:[TypeOrmModule.forFeature([Estudiante])]
})
export class EstudiantesModule {}
