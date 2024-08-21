import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { StudenModule } from './studen/studen.module';
import { CoursesModule } from './courses/courses.module';
import { CarsModule } from './cars/cars.module';
import { OwnersModule } from './owners/owners.module';
@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port:+process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    })
    ,PetsModule, AuthModule, StudenModule, CoursesModule, CarsModule, OwnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
