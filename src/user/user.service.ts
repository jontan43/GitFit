import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    ) {}
    findAll():Promise<User[]>{
        return this.usersRepository.find();
    }

    findOne(id:number):Promise<User|null>{
        return this.usersRepository.findOneBy({id});
    }

    async create(userData: Partial<User>): Promise<User> {
        const newUser = this.usersRepository.create(userData);
        return this.usersRepository.save(newUser);
    }

    async update(id: number, userData: Partial<User>): Promise<User|null> {
        await this.usersRepository.update(id, userData);
        return this.usersRepository.findOneBy({id});
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }

    findByUsername(username:string):Promise<User|null>{
        return this.usersRepository.findOneBy({username});
    }
}
