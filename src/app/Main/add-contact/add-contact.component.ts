import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtDto } from 'src/app/Models/Jwt';
import { Contact } from 'src/app/Models/conatct';
import { ServiceService } from 'src/app/Srevice/service.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  formContact!: FormGroup;

  currentUserId!: number;

  constructor(private fb: FormBuilder, private service: ServiceService) { }

  ngOnInit(): void {
    this.addContact()
    this.getId()
  }

  getId(){
    const storedJwtData = localStorage.getItem('jwtData');
    if (storedJwtData) {
        const jwtData: JwtDto = JSON.parse(storedJwtData);
        const userId =jwtData.userId
        this.currentUserId = userId
        console.log("----------> " + userId);
      }
  }
  
    




  addContact(){
    this.formContact = this.fb.group({
      message: ['', Validators.required],


    });
  }
  
  onSubmit() {
    if (this.formContact.valid) {
      const contact: Contact = {
        ...this.formContact.value
      };
      this.service.addContact(contact,this.currentUserId).subscribe(res => {
        console.log(res); 
      }, err => {
        console.error('Contact failed', err); 
      });
    } else {
      console.log('Form is invalid.');
    }

 this.formContact = this.fb.group({
      message: ['', Validators.required]


    });  }

  

}



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { JwtDto } from 'src/app/Models/Jwt';
// import { Contact } from 'src/app/Models/conatct';
// import { ServiceService } from 'src/app/Srevice/service.service';

// @Component({
//   selector: 'app-add-contact',
//   templateUrl: './add-contact.component.html',
//   styleUrls: ['./add-contact.component.css']
// })
// export class AddContactComponent implements OnInit {

//   formContact!: FormGroup;
//   currentUserId!: number;

//   constructor(private fb: FormBuilder, private service: ServiceService) { }

//   ngOnInit(): void {
//     this.formContact = this.fb.group({
//       message: ['', Validators.required],
//       contactDate: ['', Validators.required]
//     });
//     this.getId();
//   }

//   getId(): void {
//     const storedJwtData = localStorage.getItem('jwtData');
//     if (storedJwtData) {
//       const jwtData: JwtDto = JSON.parse(storedJwtData);
//       this.currentUserId = jwtData.userId;
//       console.log("----------> " + this.currentUserId);
//     }
//   }

//   onSubmit(): void {
//     if (this.formContact.valid) {
//       const contact: Contact = {
//         ...this.formContact.value,
//         user: { id: this.currentUserId, username: '', password: '', email: '', phoneNumber: '', roles: [], contacts: [], reservations: [], events: [] } // Create a mock User object
//       };
//       this.service.addContact(contact, this.currentUserId).subscribe(res => {
//         console.log(res); 
//       }, err => {
//         console.error('Contact failed', err); 
//       });
//     } else {
//       console.log('Form is invalid.');
//     }
//   }
// }
