import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    private router: Router,
    private dialog: MatDialog,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  adminLogin() {
    let dialogRef = this.dialog.open(AdminLoginComponent, {
      hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res === 'monesh') {
        this.router.navigate(['a/admin']);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Enter correct Password!',
        });
      }
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const loginForm = {
      name: form.value.name,
      email: form.value.email,
      team: form.value.team,
    };

    this.homeService.addNewTeam(loginForm).subscribe((res) => {
      if (res.team._id) {
        this.router.navigate([`u/${res.team._id}`]);
      }
    });
  }
}
