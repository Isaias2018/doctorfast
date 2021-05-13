import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/Model/Appointment';
import { ApiService } from '../Api/api.service';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private urlCreateAppointment: string = 'paciente/citas/crear';
  private urlApproveAppointment: string = 'doctor/citas/aceptar';
  private urlCancelAppointment: string = 'doctor/citas/cancelar';

  /*DOCTOR*/
  private urlAppointmentAvailabilityDoctor: string = 'doctor/citas/pendientes';
  private urlAppointmentPendingDoctor: string = 'doctor/citas/disponibles';


  /*PATIENT*/
  private urlAppointmentAvailabilityPatient: string = 'paciente/citas/disponibles';
  private urlAppointmentPendingPatient: string = 'paciente/citas/pendientes';
  private urlAppointmentCompletedPatient: string = 'paciente/citas/historial';


  private appointment: Appointment= new Appointment();

  constructor(private authService: AuthService, private apiService: ApiService, private router: Router, private httpClient: HttpClient) { }

  public setSymtom(appointment: Appointment)
  {
    this.appointment = appointment;
  }

  public getSymptom(): Appointment
  {
    return this.appointment;
  }

  /*CREAR CITAS*/
  public createAppointment(appointment: Appointment): Observable<any>
  {
    return this.httpClient.post<any>(`${this.apiService.getUrl()}/${this.urlCreateAppointment}`, appointment, {headers: this.authService.getHttpHeaders()});
  }



  /*APROBAR Y CANCELAR CITAS*/
  public approveAppointment(citaId: number): Observable<any>
  {
    return this.httpClient.put<any>(`${this.apiService.getUrl()}/${this.urlApproveAppointment}/${this.authService.getToken().usuario_id}&${citaId}`, '', {headers: this.authService.getHttpHeaders()});
  }

  public cancelAppointment(citaId: number): Observable<any>
  {
    return this.httpClient.put<any>(`${this.apiService.getUrl()}/${this.urlCancelAppointment}/${this.authService.getToken().usuario_id}&${citaId}`, '', {headers: this.authService.getHttpHeaders()});
  }





   /*DOCTOR-DOCTOR-DOCTOR-DOCTOR*/
   public findAppointmentAvailabilityDoctor(): Observable<Appointment[]>
   {
     return this.httpClient.get<Appointment[]>(`${this.apiService.getUrl()}/${this.urlAppointmentAvailabilityDoctor}/${this.authService.getToken().usuario_id}`, {headers: this.authService.getHttpHeaders()});
   }
   public findAppointmentPendingDoctor(): Observable<Appointment[]>
   {
     return this.httpClient.get<Appointment[]>(`${this.apiService.getUrl()}/${this.urlAppointmentPendingDoctor}/${this.authService.getToken().usuario_id}`, {headers: this.authService.getHttpHeaders()});
   }


  /*PATIENT-PATIENT-PATIENT-PATINET*/

  public findAppointmentAvailabilityPatient(): Observable<Appointment[]>
  {
    return this.httpClient.get<Appointment[]>(`${this.apiService.getUrl()}/${this.urlAppointmentAvailabilityPatient}/${this.authService.getToken().usuario_id}`, {headers: this.authService.getHttpHeaders()});
  }
  public findAppointmentPendingPatient(): Observable<Appointment[]>
  {
    return this.httpClient.get<Appointment[]>(`${this.apiService.getUrl()}/${this.urlAppointmentPendingPatient}/${this.authService.getToken().usuario_id}`, {headers: this.authService.getHttpHeaders()});
  }
  public findAppointmentCompletedPatient(): Observable<Appointment[]>
  {
    return this.httpClient.get<Appointment[]>(`${this.apiService.getUrl()}/${this.urlAppointmentCompletedPatient}/${this.authService.getToken().usuario_id}`, {headers: this.authService.getHttpHeaders()});
  }





}
