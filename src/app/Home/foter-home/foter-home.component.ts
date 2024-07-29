import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Srevice/service.service';
import { Event } from '../../Models/event';

@Component({
  selector: 'app-foter-home',
  templateUrl: './foter-home.component.html',
  styleUrls: ['./foter-home.component.css']
})
export class FoterHomeComponent implements OnInit {

  listEvents: Event[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service._get_all_event().subscribe((data : any[]) => {
      this.listEvents = data;
      console.log("this data"+data);
      
    });
  }
}
