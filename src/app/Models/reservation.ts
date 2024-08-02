import { Event } from "./event";
import { User } from "./user";

export interface Reservation {
    id: number;
    event: Event;
    user: User;
    reservationDate: string;
    numberOfTickets: number;
  }
  