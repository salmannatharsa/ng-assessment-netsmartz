import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) {}

  public getUsers(): Observable<UserModel[]> {
    let url = environment.baseUrl + 'users';
    return this._httpClient.get<UserModel[]>(url);
  }
}
