import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    DashboardHeaderComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, FontAwesomeModule],
})
export class DashboardModule {}
