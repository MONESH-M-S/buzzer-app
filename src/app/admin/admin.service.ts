import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  BACKEND_URL = environment.BACKEND_URL;
  private question = new Subject<{ question: any }>();

  constructor(private http: HttpClient) {}

  getClickedDetails() {
    return this.http.get<{ clicks: any; message: string }>(
      `${this.BACKEND_URL}click/`
    );
  }

  deleteClickedDetails() {
    return this.http.delete<{ message: string }>(`${this.BACKEND_URL}click/`);
  }
}
