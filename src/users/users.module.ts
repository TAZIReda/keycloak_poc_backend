import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { KeycloakModule } from 'src/keycloak/keycloak.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [KeycloakModule],
})
export class UsersModule {}
