import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  RiAncientGateFill,
  RiHome3Fill,
  RiHome3Line,
  RemixIconModule,
} from 'angular-remix-icon';

const icons = {
  RiAncientGateFill,
  RiHome3Fill,
  RiHome3Line
};
@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    DashboardHeaderComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, FontAwesomeModule,     RemixIconModule.configure(icons),],
})
export class DashboardModule {}
