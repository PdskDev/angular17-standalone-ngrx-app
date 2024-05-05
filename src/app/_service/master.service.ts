import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../_model/post';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Post[]>('/api/posts');
  }
}
