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

  getTeamDetailById(id: string) {
    return this.http.get<{ team: any; message: string }>(
      this.BACKEND_URL + 'team/' + id
    );
  }

  getAllQuetions() {
    return this.http
      .get<{ questions: any; message: string }>(`${this.BACKEND_URL}question/`)
      .subscribe((res) => {
        if (res.questions.length > 0) {
          this.question.next(res.questions);
        }
      });
  }

  getQuestionsUpdated() {
    return this.question.asObservable();
  }

  addNewQuestion(data: { qno: number; creator: string }) {
    return this.http.post<{ question: any; message: string }>(
      `${this.BACKEND_URL}question/add`,
      data
    );
  }
}
