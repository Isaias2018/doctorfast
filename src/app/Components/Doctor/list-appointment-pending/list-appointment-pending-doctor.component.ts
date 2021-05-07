import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/Appointment';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';

@Component({
  selector: 'app-list-appointment-pending-doctor',
  templateUrl: './list-appointment-pending-doctor.component.html',
  styleUrls: ['./list-appointment-pending-doctor.component.scss']
})
export class ListAppointmentPendingDoctorComponent implements OnInit {

  public listAppointments: Array<Appointment> = new Array();

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.findAppointmentAvailability();
  }

  public findAppointmentAvailability()
  {
    this.appointmentService.findAppointmentPendingDoctor().subscribe(
      (data) => {
        this.listAppointments = data;
      }
    )
  }

  public approveAppointment(appointment: Appointment)
  {
    this.appointmentService.approveAppointment(appointment.idCita).subscribe(
      () => {
        this.findAppointmentAvailability();
      }
    )
  }

  public cancelAppointment(appointment: Appointment)
  {
    this.appointmentService.cancelAppointment(appointment.idCita).subscribe(
      () => {
        this.findAppointmentAvailability();
      }
    )
  }

  public viewAppointment()
  {

  }
}
