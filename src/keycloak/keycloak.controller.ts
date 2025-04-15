import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from 'nest-keycloak-connect';

@Controller('keycloak')
export class AuthController {
  @Get('keycloak-profile')
  @UseGuards(AuthGuard)
  getKeycloakProfile(@Request() req) {
    return req.user;
  }
}
