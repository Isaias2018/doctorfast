import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/Appointment';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';

@Component({
  selector: 'app-list-appointment-availability-patient',
  templateUrl: './list-appointment-availability-patient.component.html',
  styleUrls: ['./list-appointment-availability-patient.component.scss']
})
export class ListAppointmentAvailabilityPatientComponent implements OnInit {

  public listAppointments: Array<Appointment> = new Array();

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.findAppointmentAvailability();
  }

  public findAppointmentAvailability()
  {
    this.appointmentService.findAppointmentAvailabilityPatient().subscribe(
      (data) => {
        this.listAppointments = data;
      }
    )
  }



  public viewAppointment()
  {

  }
}
