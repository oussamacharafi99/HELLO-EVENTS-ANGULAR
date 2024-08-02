// event.component.ts
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Srevice/service.service';
import { Event } from 'src/app/Models/event';
import { Reservation } from 'src/app/Models/reservation';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  listEvents: Event[] = [];
  searchForm!: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.service.getAllEvent().subscribe((data: any[]) => {
      this.listEvents = data;
      console.log("this data", data);
    });
  }

  initForm() {
    this.searchForm = this.fb.group({
      date: [''],
      location: [''],
      category: ['']
    });
  }

  onSub(id: number) {
    const reservation: Reservation = {
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
    };
    this.service.addReservation(reservation).subscribe(() => {
      alert("Reservation added");
      this.ngOnInit();
    });
  }

  onSearch() {
    const { date, location, category } = this.searchForm.value;
    this.service.searchEvents(date, location, category).subscribe((res: any) => {
      this.listEvents = res;
    });
  }
}
