import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role, User } from 'src/app/Models/user';
import { ServiceService } from 'src/app/Srevice/service.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  formSignup!: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService) { }

  ngOnInit(): void {
    this.formSignup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formSignup.valid) {
      const user: User = {
        ...this.formSignup.value,
        roles: [Role.ROLE_USER],
        contacts: [],
        reservations: [],
        events: []
      };
      this.service.signup(user).subscribe(res => {
        console.log(res); 
      }, err => {
        console.error('Signup failed', err); 
      });
    } else {
      console.log('Form is invalid.');
    }

    this.formSignup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required]
    });
  }

}

