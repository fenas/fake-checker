import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent implements OnInit {
  constructor(public auth: AuthService) {}

  loginDetails: any;

  ngOnInit(): void {
    this.auth.me().subscribe((el) => {
      console.log(el);

      this.loginDetails = el;
    });
  }
}
