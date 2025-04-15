/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { MOCK_USERS, User } from './dto/mock-user';

@Injectable()
export class UsersService {
  getAdminData() {
    throw new Error('Method not implemented.');
  }
  getPublicData() {
    throw new Error('Method not implemented.');
  }
    private users: User[] = MOCK_USERS;
    
      findAll(): User[] {
        return this.users;
      }
    
      findOne(id: number): User | undefined {
        return this.users.find(user => user.id === id);
      }
    
      create(createUserDto: CreateUserDto): User {
        const newUser: User = {
          id: this.users.length + 1,
          username: createUserDto.username,
          email: createUserDto.email,
            firstName: createUserDto.firstName,
            lastName: createUserDto.lastName,
            role: createUserDto.role, 
        };
        this.users.push(newUser);
        return newUser;
      }
    
      update(id: number, updateUserDto: CreateUserDto): User | undefined {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) return undefined;
        this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
        return this.users[userIndex];
      }
    
      remove(id: number): boolean {
        const initialLength = this.users.length;
        this.users = this.users.filter(user => user.id !== id);
        return this.users.length < initialLength;
      }
}
