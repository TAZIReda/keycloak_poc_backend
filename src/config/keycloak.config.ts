export const keycloakConfig = {
  authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL,
  realm: process.env.KEYCLOAK_REALM,
  clientId: process.env.KEYCLOAK_CLIENT_ID,
  secret: process.env.KEYCLOAK_SECRET,
  realmPublicKey: process.env.KEYCLOAK_REALM_PUBLIC_KEY,
};
