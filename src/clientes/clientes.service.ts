import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository:Repository<Cliente>
  ){}
  async create(createClienteDto: CreateClienteDto) {

    const cliente=this.clienteRepository.create(createClienteDto);
    await this.clienteRepository.save(cliente);
    return cliente;
  }

  async findAll() {
    return await this.clienteRepository.find({});
  }

  async findOne(id: string) {
    const cliente=await this.clienteRepository.findOneBy({id:id})
    if(!cliente){
      throw new NotFoundException('Client was not found 🤨')
    }
    return cliente;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
