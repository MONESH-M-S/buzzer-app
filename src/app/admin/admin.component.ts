import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  clickDetails: any;
  isClicksAvailable: boolean = false;
  id!: string;

  constructor(
    private adminService: AdminService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.adminService.getClickedDetails().subscribe((res) => {
      if (res.clicks != null) {
        this.clickDetails = res.clicks;
        this.isClicksAvailable = true;
      } else {
        this.isClicksAvailable = false;
      }
    });
  }

  refresh() {
    this.adminService.getClickedDetails().subscribe((res) => {
      if (res.clicks != null) {
        this.clickDetails = res.clicks;
        this.isClicksAvailable = true;
      } else {
        this.isClicksAvailable = false;
      }
    });
  }

  clearData() {
    this.adminService.deleteClickedDetails().subscribe((res) => {
      if (res.message == 'Deleted Successfully!') {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message,
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: res.message,
        });
      }
      this.refresh();
    });
  }

  deleteUsers() {
    this.adminService.deleteUser().subscribe((res) => {
      if (res.message == 'Deleted Successfully!') {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: res.message,
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: res.message,
        });
      }
      this.refresh();
    });
  }
}
