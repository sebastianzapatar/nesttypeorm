import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from './entities/pet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/auth.entity';
@Injectable()
export class PetsService {

  constructor(@InjectRepository(Pet) 
  private readonly petRepository: Repository<Pet>)
  { }
  async create(createPetDto: CreatePetDto,user:User) {
    const pet = this.petRepository.create(createPetDto);
    await this.petRepository.save({...pet,user});
    return pet;
  }

  async findAll() {
    const pets = await this.petRepository.find({});
    return pets;
  }

  async findOne(id: string) {
    const pet=await this.petRepository.findOneBy({id:id});
    return pet;
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    const pet = await this.petRepository.preload({id:id, ...updatePetDto});
    if (!pet) {
      throw new NotFoundException(`Pet #${id} not found`);
    }
    await this.petRepository.save(pet);
    return pet;
  }

  async remove(id: string) {
    const pet = await this.petRepository.delete({id:id});
    return pet;
  }
}
