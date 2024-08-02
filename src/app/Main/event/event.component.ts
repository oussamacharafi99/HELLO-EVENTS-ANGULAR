import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Srevice/service.service';
import { Event } from 'src/app/Models/event';
import { Reservation } from 'src/app/Models/reservation';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  listEvents: Event[] = []

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getAllEvent().subscribe((data : any[]) => {
      this.listEvents = data;
      console.log("this data", data);
    });
  }
  
  onSub(id : number){
      const reservation : Reservation = {
        id: 0,
        user: {
          id: 1,
          username: '',
          password: '',
          email: '',
          phoneNumber: '',
          roles: [],
          contacts: [],
          reservations: [],
          events: []
        },
        event: {
          id: id,
          name: '',
          description: '',
          location: '',
          category: '',
          startTime: '',
          date: '',
          price: 0,
          user: {
            id: 5,
            username: '',
            password: '',
            email: '',
            phoneNumber: '',
            roles: [],
            contacts: [],
            reservations: [],
            events: []
          }
        },
        reservationDate: '',
        numberOfTickets: 1
      }
      this.service.addReservation(reservation).subscribe(()=>{
        alert("Reservation added")
        this.ngOnInit()
      })
  }
  
}
