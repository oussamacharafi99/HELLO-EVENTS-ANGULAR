import { User } from "./user";

export interface Contact {
    id: number;
    message: string;
    contactDate: Date; 
    user: User;
  }
  