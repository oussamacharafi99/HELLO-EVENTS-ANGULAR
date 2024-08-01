import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Srevice/service.service';
import { Event } from 'src/app/Models/event';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

  events: Event[] = [];

  searchParams = {
    date: '',
    location: '',
    category: ''
  };

  constructor(private serviceService: ServiceService) {}

  onSearch() {
    this.serviceService.searchEvents(this.searchParams.date, this.searchParams.location, this.searchParams.category)
      .subscribe((res : any) => {
        this.events = res;
      });
  }
}
