import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/Appointment';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';

@Component({
  selector: 'app-list-appointment-pending-patient',
  templateUrl: './list-appointment-pending-patient.component.html',
  styleUrls: ['./list-appointment-pending-patient.component.scss']
})
export class ListAppointmentPendingPatientComponent implements OnInit {

  public listAppointments: Array<Appointment> = new Array();

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.findAppointmentAvailability();
  }

  public findAppointmentAvailability()
  {
    this.appointmentService.findAppointmentPendingPatient().subscribe(
      (data) => {
        this.listAppointments = data;
      }
    )
  }



  public viewAppointment()
  {

  }
}
