import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard, Resource, RoleGuard, Roles, Scopes } from 'nest-keycloak-connect';

@Controller('users')
@Resource('user-management')
@UseGuards(AuthGuard, RoleGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Scopes('view-users')
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
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  @Scopes('edit-users')
  update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto, @Req() req) {
    console.log('User token:', req.user);
    console.log('User roles:', req.user?.resource_access);
    return this.usersService.update(Number(id), updateUserDto);
  }
  @UseGuards(AuthGuard, RoleGuard)
  @Roles({ roles: ['admin'] })
  @Scopes('delete-users')
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    console.log('User info:', req.user); // Should show token payload
    return this.usersService.remove(Number(id));
  }
}
