import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListAppointmentCompletedPatientComponent } from './list-appointment-completed-patient.component';



describe('ListAppointmentAvailabilityComponent', () => {
  let component: ListAppointmentCompletedPatientComponent;
  let fixture: ComponentFixture<ListAppointmentCompletedPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppointmentCompletedPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppointmentCompletedPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
