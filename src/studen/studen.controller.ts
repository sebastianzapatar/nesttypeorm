import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudenService } from './studen.service';
import { CreateStudenDto } from './dto/create-studen.dto';
import { UpdateStudenDto } from './dto/update-studen.dto';

@Controller('studen')
export class StudenController {
  constructor(private readonly studenService: StudenService) {}

  @Post()
  create(@Body() createStudenDto: CreateStudenDto) {
    return this.studenService.create(createStudenDto);
  }

  @Get()
  findAll() {
    return this.studenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studenService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudenDto: UpdateStudenDto) {
    return this.studenService.update(+id, updateStudenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studenService.remove(+id);
  }
}
