import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/Appointment';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';

@Component({
  selector: 'app-list-appointment-availability-doctor',
  templateUrl: './list-appointment-availability-doctor.component.html',
  styleUrls: ['./list-appointment-availability-doctor.component.scss']
})
export class ListAppointmentAvailabilityDoctorComponent implements OnInit {

  public listAppointments: Array<Appointment> = new Array();

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.findAppointmentAvailability();
  }

  public findAppointmentAvailability()
  {
    this.appointmentService.findAppointmentAvailabilityDoctor().subscribe(
      (data) => {
        this.listAppointments = data;
      }
    )
  }



  public viewAppointment()
  {

  }
}
