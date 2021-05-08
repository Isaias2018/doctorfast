import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Model/Patient';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { PatientService } from 'src/app/Services/Patient/patient.service';
import { SideBarPatientService } from 'src/app/Services/SideBarPatient/side-bar-patient.service';

@Component({
  selector: 'app-side-bar-patient',
  templateUrl: './side-bar-patient.component.html',
  styleUrls: ['./side-bar-patient.component.scss']
})
export class SideBarPatientComponent implements OnInit {

  activeMenu: boolean = false;
  patient : Patient = new Patient;

  constructor(private patientService: PatientService  ,private authService: AuthService,private sideBarPatientService: SideBarPatientService, private router: Router) { }

  ngOnInit(): void {
    this.sideBarPatientService.activeMenu.subscribe(data => {
      this.activeMenu = data;
    })
    this.Nombre_Usuario();
  }

  public logout()
  {
    this.authService.clearToken();
    this.router.navigateByUrl('');
  }


  Nombre_Usuario(){

    this.patientService.getPatientId()
    .subscribe(data=>{
      this.patient=data;
    })

  }
}
