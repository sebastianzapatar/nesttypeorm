import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/auth.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginAuthDto } from './dto/login-dto';
@Injectable()
export class AuthService {
  constructor(@InjectRepository(User)
  private readonly userRepository:Repository<User>) {}
  async create(createAuthDto: CreateAuthDto) {
    try{
      const user = this.userRepository.create(createAuthDto);
      user.password = await bcrypt.hash(user.password, 10);
      await this.userRepository.save(user);
      const {fullName, email} = user;
      return {user: {fullName, email}};
    }
    catch(err){
      console.log(err);
      throw new BadRequestException(err.detail);
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
  async login(loginAuthDto: LoginAuthDto) {
    try{
      const {email, password} = loginAuthDto;
      const user = await this.userRepository.findOneBy({email});
      if(!user){
        throw new UnauthorizedException('Invalid credentials');
      }
      const isValid = bcrypt.compareSync(password, user.password);
      if(!isValid){
        throw new UnauthorizedException('Invalid credentials');
      }
      const {fullName} = user;
      return {user: {fullName, email}};
    }
    catch(err){
      console.log(err);
      throw new UnauthorizedException(err.detail);
    }
    
  }
}
