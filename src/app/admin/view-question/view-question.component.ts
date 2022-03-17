import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss'],
})
export class ViewQuestionComponent implements OnInit {
  availableQuestions: any;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllQuetions();
    this.adminService.getQuestionsUpdated().subscribe((res) => {
      this.availableQuestions = res.question;
      console.log(this.availableQuestions);
    });
  }
}
