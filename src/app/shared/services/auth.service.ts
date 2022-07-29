import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private http: HttpClient
  ) {}

  loginDetails = new Subject();

  async logout() {
    this.cookieService.deleteAll('/');
    await this.router.navigate(['/']);
    this.loginDetails.next(null);
  }

  me() {
    // let url = 'https://fake-checker-api.adi.so/api/user/me';
    return this.http.get(`${environment.apiUrl}/user/me`, {
      withCredentials: true,
    });
  }
}
