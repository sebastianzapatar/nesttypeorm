import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
  ) {}

  async create(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    const owner = this.ownerRepository.create(createOwnerDto);
    await this.ownerRepository.save(owner);
    return owner;
  }

  findAll(): Promise<Owner[]> {
    return this.ownerRepository.find({ relations: ['cars'] });
  }

  async findOne(id: string): Promise<Owner> {
    const owner = await this.ownerRepository.findOne({
      where: { id },
      relations: ['cars'],
    });

    if (!owner) {
      throw new NotFoundException(`Owner with ID ${id} not found`);
    }

    return owner;
  }

  async update(id: string, updateOwnerDto: UpdateOwnerDto): Promise<Owner> {
    await this.ownerRepository.update(id, updateOwnerDto);
    const updatedOwner = await this.ownerRepository.findOne({
      where: { id },
      relations: ['cars'],
    });

    if (!updatedOwner) {
      throw new NotFoundException(`Owner with ID ${id} not found`);
    }

    return updatedOwner;
  }

  async remove(id: string): Promise<void> {
    const deleteResult = await this.ownerRepository.delete(id);
    if (!deleteResult.affected) {
      throw new NotFoundException(`Owner with ID ${id} not found`);
    }
  }

  async findOwnerWithMostCars(): Promise<Owner> {
    const ownerWithMostCars = await this.ownerRepository
      .createQueryBuilder('owner')
      .leftJoin('owner.cars', 'car')
      .select('owner.id', 'owner_id')
      .addSelect('owner.name', 'owner_name')
      .addSelect('COUNT(car.id)', 'car_count')
      .groupBy('owner.id')
      .orderBy('car_count', 'DESC')
      .limit(1)
      .getRawOne();
  
    if (!ownerWithMostCars) {
      throw new NotFoundException('No owners found');
    }
  
    // Buscar al propietario completo, incluyendo los carros
    return await this.ownerRepository.findOne({
      where: { id: ownerWithMostCars.owner_id },
      relations: ['cars'],
    });
  }
  
  
}
