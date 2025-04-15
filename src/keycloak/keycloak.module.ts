import { Module } from '@nestjs/common';
import { AuthGuard, KeycloakConnectModule } from 'nest-keycloak-connect';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KeycloakService } from './keycloak.service';
import { AuthController } from './keycloak.controller';

@Module({
  imports: [
    KeycloakConnectModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        authServerUrl: configService.get<string>('KEYCLOAK_AUTH_SERVER_URL') || '',
        realm: configService.get<string>('KEYCLOAK_REALM') || '',
        clientId: configService.get<string>('KEYCLOAK_CLIENT_ID') || '',
        secret: configService.get<string>('KEYCLOAK_SECRET') || '',
        realmPublicKey: configService.get<string>('KEYCLOAK_REALM_PUBLIC_KEY') || '',
        verifyTokenAudience: false,
        confidentialPort: 0,
        bearerOnly: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthGuard, KeycloakService],
  exports: [KeycloakConnectModule, KeycloakService, AuthGuard],
})
export class KeycloakModule {}
