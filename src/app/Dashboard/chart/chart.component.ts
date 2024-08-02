import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Srevice/service.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  NumberTickets: number = 0;
chartOptions: any;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getAllReservation().subscribe(data => {
      data.forEach(d => {
        this.NumberTickets += d.numberOfTickets;
        console.log(this.NumberTickets + "0--------hh---------0");
      });
    });
  }
}
