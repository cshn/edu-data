import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { School } from '../school';
import { Property } from '../model/property';
import { PTransaction } from '../model/ptransaction';
import { Mk } from '../model/mk';

@Injectable({
  providedIn: 'root'
})

export class SchoolListService {
  private schoolsUrl = 'https://murmuring-cove-54677.herokuapp.com';  // URL to web api
  constructor(private http: HttpClient) { }

  getAllSchoolBallot(): Observable<School[]> {
    const url = `${this.schoolsUrl}/allschoolballot`;
    return this.http.get<School[]>(url);
  }
  
  getAllSchool(): Observable<School[]> {
    const url = `${this.schoolsUrl}/allschool`;
    return this.http.get<School[]>(url);
  }

  getSchoolBySchoolAndYear(year: number, phaseId: number, schoolname: String): Observable<School[]> {
    const url = `${this.schoolsUrl}/byschool/${year}/${phaseId}/${schoolname}`;
    return this.http.get<School[]>(url);
  }

  getSchoolBySchool(schoolname: String): Observable<School[]> {
    const url = `${this.schoolsUrl}/byschool/${schoolname}`;
    return this.http.get<School[]>(url);
  }

  getNearbyProperty(school: String): Observable<Property[]> {
    const url = `${this.schoolsUrl}/property/${school}`;
    return this.http.get<Property[]>(url);
  }

  getPropertyTransactions(pname: String): Observable<PTransaction[]> {
    const url = `${this.schoolsUrl}/ptransaction/${pname}`;
    return this.http.get<PTransaction[]>(url);
  }

  getSchoolsByYearByPhase(year: number, phaseId: number): Observable<School[]> {
    const url = `${this.schoolsUrl}/schoollist/${year}/${phaseId}`;
    return this.http.get<School[]>(url);
  }

  getSchoolByYear( year: number, school: String): Observable<School[]> {
    const url = `${this.schoolsUrl}/byyear/${year}/${school}`;
    return this.http.get<School[]>(url);
  }

  getSchoolByPhase( phaseId: number, school: String): Observable<School[]> {
    const url = `${this.schoolsUrl}/schoolanalysis/${phaseId}/${school}`;
    return this.http.get<School[]>(url);
  }

  getAllMoeKindergarden(): Observable<Mk[]> {
    const url = `${this.schoolsUrl}/allmk`;
    return this.http.get<Mk[]>(url);
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`SchoolService: ${message}`);
  }
  
}
