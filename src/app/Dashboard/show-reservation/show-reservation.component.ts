import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../Models/reservation';
import { ServiceService } from 'src/app/Srevice/service.service';

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.css']
})
export class ShowReservationComponent implements OnInit {
  displayedColumns: string[] = ['id', 'event', 'user', 'reservationDate', 'numberOfTickets'];
  dataSource: Reservation[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getAllReservation().subscribe((data: Reservation[]) => {
      this.dataSource = data;
      console.log(data);
    }, error => {
      console.error("Erreur lors de la récupération des réservations", error);
    });
  }

  onRemove(){
    this.service
  }
}
