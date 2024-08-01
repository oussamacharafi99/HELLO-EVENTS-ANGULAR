import { User } from "./user";

export interface Contact {
    id: number;
    message: string;
    contactDate: Date; // Use string to represent date in ISO format
    user: User;
  }
  