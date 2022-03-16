import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  BACKEND_URL = environment.BACKEND_URL;

  constructor(private http: HttpClient) {}

  addNewTeam(form: { email: string; name: string; team: string }) {
    return this.http.post<{ team: any; message: string }>(
      `${this.BACKEND_URL}login`,
      form
    );
  }
}
