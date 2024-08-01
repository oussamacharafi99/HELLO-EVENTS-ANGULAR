import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../Models/reservation'
import { ServiceService } from 'src/app/Srevice/service.service';

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.css']
})
export class ShowReservationComponent implements OnInit {

  ListReservation : Reservation[] =[];
  constructor(private service : ServiceService) { }

  ngOnInit(): void {
    this.service.getAllReservation().subscribe((data : Reservation[]) =>{
      this.ListReservation = data;
      console.log(data);
      
    }),console.error("wa hasan !");
  }

}
