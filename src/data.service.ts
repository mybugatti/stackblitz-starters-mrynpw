import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    getData(): Observable<any[]> {
      // 
      return this.http.get<any[]>(
        'https://jsonplaceholder.typicode.com/todos/');
    }

    getData2(): Observable<any[]> {
      return this.http.get<any[]>(
        'https://jsonplaceholder.typicode.com/users/');
  }
}