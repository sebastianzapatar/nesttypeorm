import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from './entities/compra.entity';
@Injectable()
export class ComprasService {
  constructor(
    @InjectRepository(Compra)
    private readonly compraRepository:Repository<Compra>
  ){}
  async create(createCompraDto: CreateCompraDto) {
    const compra=this.compraRepository.create(createCompraDto);
    await this.compraRepository.save(compra);
    return compra;
  }

  async findAll() {
    return await this.compraRepository.find({});
  }

  findOne(id: string) {
    const compra=this.compraRepository.findOneBy({id:id});
    if(!compra){
      throw new NotFoundException('Not Found 🤐');
    }
    return compra;
  }

  update(id: number, updateCompraDto: UpdateCompraDto) {
    return `This action updates a #${id} compra`;
  }
  

  remove(id: number) {
    return `This action removes a #${id} compra`;
  }
}
