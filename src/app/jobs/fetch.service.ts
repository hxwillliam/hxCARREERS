
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private apiUrl = 'https://www.themuse.com/api/public/jobs?category=Computer%20and%20IT&category=Data%20and%20Analytics&category=Data%20Science&category=IT&category=Science%20and%20Engineering&category=Software%20Engineer&category=Software%20Engineering&category=UX&page=5&api_key=c12017e2b563cf14b04ee072cc975bb6b57aaa0e840ac2a1a3255eaa49d044e2';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}