import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly repository:Repository<User>) {}

  create(dto: CreateUserDto) {
    const user =  this.repository.create(dto);
    return this.repository.save(user);
  }

  async update(dto: CreateUserDto) {
    const user = await this.findOneByEmail(dto.email);
    if (!user) return null;

    this.repository.merge(user, dto);
    this.repository.save(user);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({id});
  }

  findOneByEmail(email: string) {
    return this.repository.findOneBy({email});
  }

  findByIdAndRefreshToken(id: string,  refreshToken: string) {
    return this.repository.findOneBy({ id, refreshToken });
  }

  async remove(id: string) {
    const user = await this.repository.findOneBy({id});    
    if (!user) return null;  
    return this.repository.remove(user);
  }
}
