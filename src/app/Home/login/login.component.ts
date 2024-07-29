import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtDto } from 'src/app/Models/Jwt';
import { User } from 'src/app/Models/user';
import { ServiceService } from 'src/app/Srevice/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService) { }

  ngOnInit(): void {
      this.valide();
  }

  valide(){
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const user: User = this.formLogin.value;
      this.service.login(user)
        .subscribe((res: JwtDto) => {
          localStorage.setItem('jwtData', JSON.stringify(res));
        });
    } else {
      console.log('Form is invalid.');
    }
    this.valide();
  }
}
