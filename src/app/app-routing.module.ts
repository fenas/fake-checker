import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialLoginHandlerComponent } from './shared/components/login-redirect.component';
import { AuthrouteGuard } from './shared/guards/authroute.guard';

const routes: Routes = [
  {
    path: 'auth/callback',
    component: SocialLoginHandlerComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthrouteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
