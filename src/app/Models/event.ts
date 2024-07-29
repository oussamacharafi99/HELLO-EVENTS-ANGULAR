import { Reservation } from "./reservation";
import { User } from "./user";

export interface Event {
    id: number;
    name: string;
    description: string;
    location: string;
    category: string;
    startTime: string; // Use string to represent time in HH:mm format
    date: string; // Use string to represent date in ISO format
    price: number;
    reservations: Reservation[];
    user: User;
  }
  