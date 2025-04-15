// import Keycloak from 'keycloak-connect';
// import session from 'express-session';
// import * as dotenv from 'dotenv';

// dotenv.config();

// const memoryStore = new session.MemoryStore();

// export const keycloak = new Keycloak(
//   {
//     store: memoryStore,
//   },
//   {
//     realm: process.env.KEYCLOAK_REALM as any,
//     'auth-server-url': process.env.KEYCLOAK_URL as any,
//     resource: process.env.KEYCLOAK_CLIENT_ID as any,
//     secret: process.env.KEYCLOAK_SECRET as any,
//   }
// );

// export function keycloakMiddleware() {
//   return [
//     session({
//       secret: process.env.SESSION_SECRET,
//       resave: false,
//       saveUninitialized: true,
//       store: memoryStore,
//     }),
//     keycloak.middleware(),
//   ];
// }
