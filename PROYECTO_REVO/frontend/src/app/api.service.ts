import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api';
  private currentUser: string | null = null;
  
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, { username, password });
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout/`, {});
  }

  setCurrentUser(username: string): void {
    this.currentUser = username;
  }

  getCurrentUser(): string | null {
    return this.currentUser;
  }

  clearCurrentUser(): void {
    this.currentUser = null;
  }
}