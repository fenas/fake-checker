import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSocialLogin() {
    location.href = `https://2abe-115-96-181-69.ngrok.io/api/auth/google/`;
  }
}
