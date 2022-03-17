import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  teamDetails: any;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
        this.adminService.getTeamDetailById(params['id']).subscribe((res) => {
          if (res.team.isAdmin === false) {
            this.router.navigate(['/']);
          }
        });
      }
    });
  }

  openAddNewQuestionDialog() {
    let dialogRef = this.dialog.open(AddQuestionComponent, {
      data: {
        id: this.id,
      },
      hasBackdrop: true,
      disableClose: true,
    });
  }
}
