import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoterHomeComponent } from './foter-home.component';

describe('FoterHomeComponent', () => {
  let component: FoterHomeComponent;
  let fixture: ComponentFixture<FoterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoterHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
