/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard, Public, Roles } from 'nest-keycloak-connect';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // GET /users
    @Get()
    @UseGuards(AuthGuard)
    findAll() {
      return this.usersService.findAll();
    }
  
    // GET /users/:id
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.usersService.findOne(Number(id));
    }
  
    // POST /users
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
      return this.usersService.create(createUserDto);
    }
  
    // PUT /users/:id
    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
      return this.usersService.update(Number(id), updateUserDto);
    }
  
    // DELETE /users/:id
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.usersService.remove(Number(id));
    }

//     @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

  @Get('public')
  @Public()
  getPublicData() {
    return this.usersService.getPublicData();
  }

  @Get('profile')
  getProfile(@Req() request) {
    // The user info is available in request.user
    return request.user;
  }

  @Get('admin')
  @Roles({ roles: ['admin'] })
  getAdminData() {
    return this.usersService.getAdminData();
  }
}
