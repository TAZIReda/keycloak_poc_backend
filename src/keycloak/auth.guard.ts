// /* eslint-disable prettier/prettier */
// import { Injectable } from '@nestjs/common';
// import { CanActivate, ExecutionContext } from '@nestjs/common';
// import { KeycloakService } from './keycloak.service';

// @Injectable()
// export class KeycloakAuthGuard implements CanActivate {
//   // constructor(private readonly keycloakService: KeycloakService) {}

//   // async canActivate(context: ExecutionContext): Promise<boolean> {
//   //   const request = context.switchToHttp().getRequest();
//   //   const token = request.headers.authorization?.split(' ')[1];

//   //   if (!token) {
//   //     return false;
//   //   }

//   //   const valid = await this.keycloakService.validateToken(token) as boolean;
//   //   return valid;
//   // }
// }
