import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersController } from './owners.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';

@Module({
  controllers: [OwnersController],
  providers: [OwnersService],
  imports:[TypeOrmModule.forFeature([Owner])]
})
export class OwnersModule {}
