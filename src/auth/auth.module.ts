import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/auth.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [TypeOrmModule.forFeature([User]), 
  PassportModule.register({defaultStrategy: 'jwt'}),
  JwtModule.registerAsync({
    imports:[],
    inject:[],
    useFactory: async()=>{
      return {
        secret: process.env.SECRET_PASSWORD,
        signOptions: {expiresIn: '1h'}
      }
    }
  }
  )
],
})
export class AuthModule {}