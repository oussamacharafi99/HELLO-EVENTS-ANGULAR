import { User } from "./user";

export interface Reservation {
    id: number;
    event: Event;
    user: User;
    reservationDate: string; // Use string to represent date in ISO format
    numberOfTickets: number;
  }
  