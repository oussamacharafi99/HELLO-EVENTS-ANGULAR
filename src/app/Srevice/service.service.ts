import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { JwtDto } from '../Models/Jwt';
import { Reservation } from '../Models/reservation';

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
  public _add_events(event: Event): Observable<Event> {
    return this.http.post<Event>(this._API_ADD_EVENT, event);
  }

   /*----*__GET_EVENTs__*-----*/
   public _get_all_event(): Observable<Event[]> {
    return this.http.get<Event[]>(this._API_GET_EVENTS);
  }

  /*----*__GET_EVENTs_By_Id__*-----*/
  public _getEventById(id:number): Observable<Event> {
    return this.http.get<Event>(`${this._API_EVENT+"get"}/${id}`);

}
   /*----*__Delete_EVENTs_By_Id__*-----*/
   public _deleteEventById(id:number): Observable<Event> {
    return this.http.delete<Event>(`${this._API_EVENT+"delete"}/${id}`);

}

/*----*__Update_EVENTs_By_Id__*-----*/
public _updateEvent(event:Event,id:number): Observable<Event> {
  return this.http.put<Event>(`${this._API_EVENT+"delete"}/${id}`,event);

}

// public searchEvents(date?: string, location?: string, category?: string): Observable<Event[]> {
//     let params = new HttpParams();
    
//     if (date) {
//       params = params.set('date', date);
//     }
//     if (location) {
//       params = params.set('location', location);
//     }
//     if (category) {
//       params = params.set('category', category);
//     }

//     return this.http.get<Event[]>(this._API_SEARCH_EVENTS, { params });
//   }


/*----*__ADD_RESERVATION__*-----*/
public _add_reservation(reservation: Reservation): Observable<Reservation> {
  return this.http.post<Reservation>(`${this._API_RESERVATION+"add"}`, reservation);
}

 /*----*__GET_RESERVATION_By_User__*-----*/
 public get_user_reservation(): Observable<Reservation[]> {
  return this.http.get<Reservation[]>(`${this._API_RESERVATION+"get_user_reservation"}`);
}
 /*----*__GET_All_RESERVATION__*-----*/
 public get_all_reservation(): Observable<Reservation[]> {
  return this.http.get<Reservation[]>(`${this._API_RESERVATION+"get_all"}`);
}

 /*----*__Delete_RESERVATION__*-----*/
 public _deleteReservationById(id:number): Observable<Reservation> {
  return this.http.delete<Reservation>(`${this._API_RESERVATION+"delete"}/${id}`);

}


}
