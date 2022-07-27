import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  onSocialLogin() {
    location.href = `https://fake-checker-api.adi.so/api/auth/google/`;
  }
}
