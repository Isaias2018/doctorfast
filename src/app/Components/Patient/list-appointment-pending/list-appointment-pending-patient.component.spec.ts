import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ListAppointmentPendingPatientComponent } from './list-appointment-pending-patient.component';

describe('ListAppointmentAvailabilityComponent', () => {
  let component: ListAppointmentPendingPatientComponent;
  let fixture: ComponentFixture<ListAppointmentPendingPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppointmentPendingPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppointmentPendingPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
