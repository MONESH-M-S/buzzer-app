import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
})
export class AddQuestionComponent implements OnInit {
  qno!: number;

  constructor(
    private dialogRef: MatDialogRef<AddQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { id: string },
    private adminService: AdminService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    if (!this.data.id) {
      this.dialogRef.close();
    }
  }

  addNewQuestion() {
    const data = {
      qno: this.qno,
      creator: this.data.id,
    };
    this.adminService.addNewQuestion(data).subscribe((res) => {
      if (res.question._id) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message,
        });
        window.setTimeout(() => {
          this.dialogRef.close();
        }, 2500);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: res.message,
        });
      }
    });
  }
}
