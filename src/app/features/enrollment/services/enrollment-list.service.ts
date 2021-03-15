import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnrollmentEndpoints } from '../constants/enrollment-endpoints';
import { Enrollee } from '../interfaces/enrollee';
import { SaveEnrolleeRequestBody } from '../interfaces/save-enrollee-request-body';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentListService {

  constructor(private http: HttpClient) { }

  getEnrollees(): Observable<Enrollee[]> {
    const url = EnrollmentEndpoints.EnrollmentList;
    return this.http.get<Enrollee[]>(url);
  }

  updateEnrollee(enrollee: Enrollee): Observable<Enrollee> {
    const url = `${EnrollmentEndpoints.SaveEnrollee}/${enrollee.id}`;
    const requestBody: SaveEnrolleeRequestBody = {
      active: enrollee.active,
      name: enrollee.name
    };
    return this.http.put<Enrollee>(url, requestBody);
  }
}
