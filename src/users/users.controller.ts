import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard, Resource, RoleGuard, Scopes } from 'nest-keycloak-connect';
const logger = new Logger('AuthDebug');
@Controller('users')
@Resource('user-management')
@UseGuards(AuthGuard, RoleGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Scopes('view-users') // This scope is used to view all users
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @Scopes('view-users')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  @Post()
  @Scopes('create-users')
  create(@Body() createUserDto: CreateUserDto) {
    logger.debug('Checking authorization for create-users scope');
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  @Scopes('edit-users')
  update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return this.usersService.update(Number(id), updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @Scopes('delete-users')
  remove(@Param('id') id: string) {
    return this.usersService.remove(Number(id));
  }
}
