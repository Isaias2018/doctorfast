import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppointmentAvailabilityPatientComponent } from './list-appointment-availability-patient.component';

describe('ListAppointmentAvailabilityComponent', () => {
  let component: ListAppointmentAvailabilityPatientComponent;
  let fixture: ComponentFixture<ListAppointmentAvailabilityPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppointmentAvailabilityPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppointmentAvailabilityPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
