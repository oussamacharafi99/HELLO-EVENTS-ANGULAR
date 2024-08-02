import { Reservation } from "./reservation";
import { User } from "./user";

export interface Event {
    id: number;
    name: string;
    description: string;
    location: string;
    category: string;
    startTime: string; 
    date: string; 
    price: number;
    user: User;
  }
