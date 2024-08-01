import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReservationByIdComponent } from './get-reservation-by-id.component';

describe('GetReservationByIdComponent', () => {
  let component: GetReservationByIdComponent;
  let fixture: ComponentFixture<GetReservationByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReservationByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetReservationByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
