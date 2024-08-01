import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtDto } from 'src/app/Models/Jwt';
import { Role, User } from 'src/app/Models/user';
import { ServiceService } from 'src/app/Srevice/service.service';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.valide();
  }

  valide() {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const user: User = this.formLogin.value;
      this.service.login(user).subscribe({
        next: (res: JwtDto) => {
          localStorage.setItem('jwtData', JSON.stringify(res));
          
          const decodedToken: any = jwtDecode(res.token);
          
          if (decodedToken.roles.includes(Role.ROLE_ADMIN)) {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/main']);
          }
        },
        error: (err) => {
          alert(this.errorMessage = 'Login failed. Please check your credentials and try again.');
          console.error('Login error:', err);
          
        }
      });
    } else {
      this.errorMessage = 'Please fill in all required fields.';
      console.log('Form is invalid.');
    }
    this.valide()
  }
}
