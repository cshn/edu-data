import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
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

}
