import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Models/Users';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  CACHE_KEY = 'httpCache';
  users;
  usersURL = 'assets/users.json';

  constructor(private http: HttpClient) {
    this.users = this.getUsers();
    this.users = this.users.subscribe(next => {localStorage[this.CACHE_KEY] = JSON.stringify(next); });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersURL);
  }

  initializeUsers(): void {

  }

}
