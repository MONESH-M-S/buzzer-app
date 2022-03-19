import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  currentDateTime: any;
  id!: string;
  userDetails: any;
  isLoading: boolean = false;

  constructor(
    private datePipe: DatePipe,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
        this.userService.getUserDetailsById(params['id']).subscribe((res) => {
          if (res.user) {
            this.userDetails = res.user;
          }
        });
      }
    });
  }

  onBuzzerClicked() {
    this.isLoading = true;
    this.currentDateTime = this.datePipe.transform(
      new Date(),
      'dd-MM-yyyy h:mm:ss'
    );

    const form = {
      team: this.userDetails.team,
      name: this.userDetails.name,
      time: this.currentDateTime,
    };

    this.userService.addClickedEvent(form).subscribe((res) => {
      if (res.click) {
        this.isLoading = false;
      }
    });
  }
}
