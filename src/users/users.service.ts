import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as fs from 'fs/promises';
import * as path from 'path';

const USERS_PATH = path.resolve(__dirname, '../../src/data/users.json');
@Injectable()
export class UsersService {
  private async readUsers(): Promise<any[]> {
    const data = await fs.readFile(USERS_PATH, 'utf8');
    return JSON.parse(data);
  }

  private async writeUsers(users: any[]): Promise<void> {
    await fs.writeFile(USERS_PATH, JSON.stringify(users, null, 2));
  }

  async create(createUserDto: CreateUserDto) {
    const users = await this.readUsers();
    const newUser = {
      id: Date.now(),
      ...createUserDto,
    };
    users.push(newUser);
    await this.writeUsers(users);
    return newUser;
  }

  async findAll() {
    return this.readUsers();
  }

  async findOne(id: number) {
    const users = await this.readUsers();
    return users.find((u) => u.id === id);
  }

  async update(id: number, updateUserDto: Partial<CreateUserDto>) {
    const users = await this.readUsers();
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return null;
    users[index] = { ...users[index], ...updateUserDto };
    await this.writeUsers(users);
    return users[index];
  }

  async remove(id: number) {
    const users = await this.readUsers();
    const updated = users.filter((u) => u.id !== id);
    await this.writeUsers(updated);
    return { deleted: true };
  }
}
