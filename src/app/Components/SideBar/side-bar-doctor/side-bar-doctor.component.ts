import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Model/Doctor';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { DoctorService } from 'src/app/Services/Doctor/doctor.service';
import { SideBarDoctorService } from 'src/app/Services/SideBarDoctor/side-bar-doctor.service';

@Component({
  selector: 'app-side-bar-doctor',
  templateUrl: './side-bar-doctor.component.html',
  styleUrls: ['./side-bar-doctor.component.scss']
})
export class SideBarDoctorComponent implements OnInit {

  activeMenu: boolean = false;
  doctor: Doctor = new Doctor;

  constructor(private doctorService: DoctorService, private authService: AuthService,private sideBarDoctorService: SideBarDoctorService, private router: Router) { }

  ngOnInit(): void {
    this.sideBarDoctorService.activeMenu.subscribe(data => {
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

    this.doctorService.getDoctorId()
    .subscribe(data=>{
      this.doctor=data;
    })

  }
}
