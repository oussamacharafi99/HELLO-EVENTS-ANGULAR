import { User } from "./user";

export interface Contact {
    id: number;
    message: string;
    contactDate: string; // Use string to represent date in ISO format
    user: User;
  }
  