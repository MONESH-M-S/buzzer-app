import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BACKEND_URL = environment.BACKEND_URL;
  constructor(private http: HttpClient) {}

  getUserDetailsById(id: string) {
    return this.http.get<{ user: any; message: string }>(
      `${this.BACKEND_URL}team/${id}`
    );
  }

  addClickedEvent(form: any) {
    return this.http.post<{ click: any; message: string }>(
      `${this.BACKEND_URL}click`,
      form
    );
  }
}
