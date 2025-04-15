/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class KeycloakService {
    constructor(private configService: ConfigService) {}

    // Example method to get user info from Keycloak
    async getUserInfo(token: string) {
      const authServerUrl = this.configService.get('KEYCLOAK_AUTH_SERVER_URL');
      const realm = this.configService.get('KEYCLOAK_REALM');      
      try {
        const response = await axios.get(
          `${authServerUrl}/realms/${realm}/protocol/openid-connect/userinfo`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        return response.data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        throw new Error('Failed to fetch user info from Keycloak');
      }
    }


}
