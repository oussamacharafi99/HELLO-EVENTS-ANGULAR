import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Models/conatct';
import { ServiceService } from 'src/app/Srevice/service.service';


@Component({
  selector: 'app-show-contact',
  templateUrl: './show-contact.component.html',
  styleUrls: ['./show-contact.component.css']
})
export class ShowContactComponent implements OnInit {

  ListContact: Contact[] = [];
  displayedColumns: string[] = ['id', 'message', 'contactDate', 'user', 'delete'];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getAllContact().subscribe((data: Contact[]) => {
      this.ListContact = data;
    }, error => {
      console.error("Erreur lors de la récupération des contacts :", error);
    });
  }

  deleteContact(id: number): void {
    // Logique pour supprimer un contact par son ID
    console.log(`Suppression du contact avec l'ID : ${id}`);
  }
}
