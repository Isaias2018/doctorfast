import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppointmentAvailabilityDoctorComponent } from './list-appointment-availability-doctor.component';

describe('ListAppointmentAvailabilityComponent', () => {
  let component: ListAppointmentAvailabilityDoctorComponent;
  let fixture: ComponentFixture<ListAppointmentAvailabilityDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppointmentAvailabilityDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppointmentAvailabilityDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
