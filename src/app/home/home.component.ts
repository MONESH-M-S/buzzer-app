import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const loginForm = {
      name: form.value.name,
      email: form.value.email,
      team: form.value.team,
    };

    this.homeService.addNewTeam(loginForm).subscribe((res) => {
      if (res.team._id) {
        this.router.navigate([`${res.team._id}`]);
      }
    });
  }
}
