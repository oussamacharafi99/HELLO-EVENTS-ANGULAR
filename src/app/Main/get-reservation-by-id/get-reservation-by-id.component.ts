import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/Models/reservation';
import { ServiceService } from 'src/app/Srevice/service.service';

@Component({
  selector: 'app-get-reservation-by-id',
  templateUrl: './get-reservation-by-id.component.html',
  styleUrls: ['./get-reservation-by-id.component.css']
})
export class GetReservationByIdComponent implements OnInit {

  listReservation: Reservation[] = []

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getUserReservation().subscribe((data : any[]) => {
      this.listReservation = data;
      console.log("this data", data);
    });
  }
}
