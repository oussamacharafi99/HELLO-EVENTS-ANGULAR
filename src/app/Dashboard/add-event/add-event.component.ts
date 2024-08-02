import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Srevice/service.service';
import { Event } from '../../Models/event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  formAddEvent!: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formAddEvent = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      category: ['', Validators.required],
      startTime: ['', Validators.required],
      date: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.formAddEvent.valid) {
      const newEvent: any= this.formAddEvent.value;
      this.service.addEvents(newEvent).subscribe();
    } else {
      console.log('Form is invalid');
      
    }
  }
}
