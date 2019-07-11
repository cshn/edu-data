import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { School } from '../school';

@Injectable({
  providedIn: 'root'
})

export class SchoolListService {
  private schoolsUrl = 'https://murmuring-cove-54677.herokuapp.com/schoollist';  // URL to web api
  constructor(private http: HttpClient) { }

  getSchools(): Observable<School[]> {
    return this.http.get<School[]>(this.schoolsUrl);
  }

  getSchoolsByPhase(year: number, phaseId: number): Observable<School[]> {
    const url = `${this.schoolsUrl}/${year}/${phaseId}`;
    return this.http.get<School[]>(url);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
  
}
