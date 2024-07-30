import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { JwtDto } from '../Models/Jwt';
import { Reservation } from '../Models/reservation';
import { Contact } from '../Models/conatct';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _API_ADD_EVENT = 'http://localhost:9000/api/events/add';
  private _API_SIGNUP = 'http://localhost:9000/api/user/signup';
  private _API_LOGIN = 'http://localhost:9000/api/user/login';
  private _API_GET_EVENTS = 'http://localhost:9000/api/events/get_all';

  private _API_EVENT = 'http://localhost:9000/api/events/';

  private _API_RESERVATION = 'http://localhost:9000/api/reservations/';
  private _API_CONTACT = 'http://localhost:9000/api/contact/';



  constructor(private http: HttpClient) { }

  /*----*__LOGIN__*-----*/
  public login(user: User): Observable<JwtDto> {
    return this.http.post<JwtDto>(this._API_LOGIN, user);
  }

  /*----*__SIGNUP__*-----*/
  public signup(user: User): Observable<string> {
    return this.http.post<string>(this._API_SIGNUP, user);
  }

  /*----*__ADD_EVENT__*-----*/
  public addEvents(event: Event): Observable<Event> {
    return this.http.post<Event>(this._API_ADD_EVENT, event);
  }

   /*----*__GET_EVENTs__*-----*/
   public getAllEvent(): Observable<Event[]> {
    return this.http.get<Event[]>(this._API_GET_EVENTS);
  }

  /*----*__GET_EVENTs_By_Id__*-----*/
  public getEventById(id:number): Observable<Event> {
    return this.http.get<Event>(`${this._API_EVENT}get/${id}`);

}
   /*----*__Delete_EVENTs_By_Id__*-----*/
   public deleteEventById(id:number): Observable<Event> {
    return this.http.delete<Event>(`${this._API_EVENT}delete/${id}`);

}

/*----*__Update_EVENTs_By_Id__*-----*/
public updateEvent(event:Event,id:number): Observable<Event> {
  return this.http.put<Event>(`${this._API_EVENT}update/${id}`,event);

}

/*----*__Search__*-----*/

public searchEvents(date?: string, location?: string, category?: string): Observable<Event[]> {
  let params = new HttpParams();
  
  if (date) {
    params = params.set('date', date);
  }
  if (location) {
    params = params.set('location', location);
  }
  if (category) {
    params = params.set('category', category);
  }

  return this.http.get<Event[]>(`${this._API_EVENT}seatch`, { params });
}


/*----*-------------------RESERVATION-----------------------------------------------*/

/*----*__ADD_RESERVATION__*-----*/
public addReservation(reservation: Reservation): Observable<Reservation> {
  return this.http.post<Reservation>(`${this._API_RESERVATION}add`, reservation);
}

  /*----*__GET_RESERVATION_By_User__*-----*/
 public getUserReservation(): Observable<Reservation[]> {
  return this.http.get<Reservation[]>(`${this._API_RESERVATION}get_user_reservation`);
}
 /*----*__GET_All_RESERVATION__*-----*/
 public getAllReservation(): Observable<Reservation[]> {
  return this.http.get<Reservation[]>(`${this._API_RESERVATION}get_all`);
}

 /*----*__Delete_RESERVATION__*-----*/
 public deleteReservationById(id:number): Observable<Reservation> {
  return this.http.delete<Reservation>(`${this._API_RESERVATION}delete/${id}`);

}

/*----*------------------- CONTACT-----------------------------------------------*/

/*----*__ADD_CONTACT__*-----*/
public addContact(contact:Contact,id:number): Observable<Contact> {
  return this.http.post<Contact>(`${this._API_CONTACT}add/${id}`, contact);
}

  /*----*__GET_Contact_By_User_Id__*-----*/
 public getContactByUserId(id:number): Observable<Contact[]> {
  return this.http.get<Contact[]>(`${this._API_CONTACT}get/${id}`);
}
 /*----*__GET_All_Contact__*-----*/
 public getAllContact(): Observable<Contact[]> {
  return this.http.get<Contact[]>(`${this._API_CONTACT}get_all`);
}



}
