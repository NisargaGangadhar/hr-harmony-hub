// username.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameService {
  constructor(private http: HttpClient) { }
  private usernameSubject = new BehaviorSubject<string>('');
  public username$ = this.usernameSubject.asObservable();

  setUsername(username: string): void {
    this.usernameSubject.next(username);
  }

  signup(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/signup', { username, password });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/login', { username, password });
  }

}
