import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
@Injectable()
export class CarsService {

  constructor(
    @InjectRepository(Car)
    private readonly carRepository:Repository<Car>
  ){}
 async create(createCarDto: CreateCarDto) {
    const car=this.carRepository.create(createCarDto);
    await this.carRepository.save(car);
    return car;
  }

  async findAll() {
    return this.carRepository.find({ relations: ['owners'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
