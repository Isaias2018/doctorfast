import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/Appointment';
import { AppointmentService } from 'src/app/Services/Appointment/appointment.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-appointment-completed-patient',
  templateUrl: './list-appointment-completed-patient.component.html',
  styleUrls: ['./list-appointment-completed-patient.component.scss']
})
export class ListAppointmentCompletedPatientComponent implements OnInit {

  closeResult = '';

  public listAppointments: Array<Appointment> = new Array();

  constructor(private modalService: NgbModal,private appointmentService: AppointmentService) { }

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




  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
