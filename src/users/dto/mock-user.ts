/* eslint-disable prettier/prettier */


export interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  }
  
  export const MOCK_USERS: User[] = [
    { id: 1, username: 'ali.benali', email: 'ali.benali@example.dz', firstName: 'Ali', lastName: 'Benali', role: 'admin' },
    { id: 2, username: 'fatima.cherifi', email: 'fatima.cherifi@example.dz', firstName: 'Fatima', lastName: 'Cherifi', role: 'user' },
    { id: 3, username: 'mehdi.larbi', email: 'mehdi.larbi@example.dz', firstName: 'Mehdi', lastName: 'Larbi', role: 'user' },
    { id: 4, username: 'yasmine.benomar', email: 'yasmine.benomar@example.dz', firstName: 'Yasmine', lastName: 'Benomar', role: 'manager' },
    { id: 5, username: 'karim.habib', email: 'karim.habib@example.dz', firstName: 'Karim', lastName: 'Habib', role: 'admin' },
    { id: 6, username: 'samira.bekkouche', email: 'samira.bekkouche@example.dz', firstName: 'Samira', lastName: 'Bekkouche', role: 'user' },
    { id: 7, username: 'nassim.khelifi', email: 'nassim.khelifi@example.dz', firstName: 'Nassim', lastName: 'Khelifi', role: 'editor' },
    { id: 8, username: 'amina.hammadi', email: 'amina.hammadi@example.dz', firstName: 'Amina', lastName: 'Hammadi', role: 'user' },
    { id: 9, username: 'youssef.benmansour', email: 'youssef.benmansour@example.dz', firstName: 'Youssef', lastName: 'Benmansour', role: 'user' },
    { id: 10, username: 'mohamed.belhadj', email: 'mohamed.belhadj@example.dz', firstName: 'Mohamed', lastName: 'Belhadj', role: 'admin' },
  ];
  