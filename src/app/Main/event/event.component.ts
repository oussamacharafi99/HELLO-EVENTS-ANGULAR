import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Srevice/service.service';
import { Event } from 'src/app/Models/event';

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
}
