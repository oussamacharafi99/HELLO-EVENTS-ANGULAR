import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../Models/reservation';
import { ServiceService } from 'src/app/Srevice/service.service';

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.css']
})
export class ShowReservationComponent implements OnInit {
  displayedColumns: string[] = ['id', 'event', 'user', 'reservationDate', 'numberOfTickets', 'delete'];
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

  deleteReservation(id: number): void {
    this.service.deleteReservationById(id).subscribe(() => {
      this.dataSource = this.dataSource.filter(reservation => reservation.id !== id);
      console.log(`Reservation with ID ${id} has been deleted`);
    }, error => {
      console.error("Erreur lors de la suppression de la réservation", error);
    });
  }
}
