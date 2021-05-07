import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListAppointmentPendingDoctorComponent } from './list-appointment-pending-doctor.component';



describe('ListAppointmentAvailabilityComponent', () => {
  let component: ListAppointmentPendingDoctorComponent;
  let fixture: ComponentFixture<ListAppointmentPendingDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppointmentPendingDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppointmentPendingDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
