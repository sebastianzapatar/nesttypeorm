import { PartialType } from '@nestjs/mapped-types';
import { CreateStudenDto } from './create-studen.dto';

export class UpdateStudenDto extends PartialType(CreateStudenDto) {}
