import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  BACKEND_URL = environment.BACKEND_URL;

  constructor(private http: HttpClient) {}

  getTeamDetailById(id: string) {
    return this.http.get<{ team: any; message: string }>(
      this.BACKEND_URL + 'team/' + id
    );
  }

  addNewQuestion(data: { qno: number; creator: string }) {
    return this.http.post<{ question: any; message: string }>(
      `${this.BACKEND_URL}question/add`,
      data
    );
  }
}
