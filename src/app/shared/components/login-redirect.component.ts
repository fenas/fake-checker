import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { firstValueFrom } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  template: '',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLoginHandlerComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  async ngOnInit() {
    const query = this.route.snapshot.queryParams;
    if (query && query?.['code'] === 'SUCCESS') {
      localStorage.setItem('token', query['token']);

      await this.router.navigateByUrl('/dashboard/home');
    } else {
      await this.router.navigateByUrl('/');
    }
  }
}
