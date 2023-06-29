import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPostData } from '../components/posts/posts.component';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {}

  postDetails(): Observable<GetPostData> {
    return this.http.get<GetPostData>(
      `https://jsonplaceholder.typicode.com/posts`
    );
  }
}
