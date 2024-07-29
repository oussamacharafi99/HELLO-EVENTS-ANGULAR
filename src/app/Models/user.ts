import { Contact } from "./conatct";
import { Reservation } from "./reservation";

export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    phoneNumber: string;
    roles: Role[];
    contacts: Contact[];
    reservations: Reservation[];
    events: Event[];
  }
  
  export enum Role {
    ROLE_USER = 'ROLE_USER',
    ROLE_ADMIN = 'ROLE_ADMIN'
  }
  