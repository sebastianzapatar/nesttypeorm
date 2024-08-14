import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { AuthGuard } from '@nestjs/passport';
import { UseRoleGuard } from 'src/use-role/use-role.guard';
import { User } from 'src/auth/entities/auth.entity';
import { getUser } from 'src/auth/decorators/getUser.decorator';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  @UseGuards(AuthGuard(),UseRoleGuard)
  create(@Body() createPetDto: CreatePetDto,@getUser() user:User) {
    return this.petsService.create(createPetDto,
      user);
  }

  @Get()
  @UseGuards(AuthGuard())
  findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.update(id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petsService.remove(id);
  }
}
