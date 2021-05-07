import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/Appointment';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';

@Component({
  selector: 'app-list-appointment-completed-patient',
  templateUrl: './list-appointment-completed-patient.component.html',
  styleUrls: ['./list-appointment-completed-patient.component.scss']
})
export class ListAppointmentCompletedPatientComponent implements OnInit {

  public listAppointments: Array<Appointment> = new Array();

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.findAppointmentAvailability();
  }

  public findAppointmentAvailability()
  {
    this.appointmentService.findAppointmentCompletedPatient().subscribe(
      (data) => {
        this.listAppointments = data;
      }
    )
  }



  public viewAppointment()
  {

  }
}
