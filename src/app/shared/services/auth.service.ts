import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private cookieService: CookieService) {}

  async logout() {
    this.cookieService.deleteAll('/');
    await this.router.navigate(['/']);
  }
}
