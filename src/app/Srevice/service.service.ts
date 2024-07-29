import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { JwtDto } from '../Models/Jwt';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _API_ADD_EVENT = 'http://localhost:9000/api/events/add';
  private _API_SIGNUP = 'http://localhost:9000/api/user/signup';
  private _API_LOGIN = 'http://localhost:9000/api/user/login';

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
}
