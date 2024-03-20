import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogModel } from '../models/blog-model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private _httpClient: HttpClient) {}

  public getBlogs(): Observable<BlogModel[]> {
    let url = environment.baseUrl + 'posts';
    return this._httpClient.get<BlogModel[]>(url);
  }
}
