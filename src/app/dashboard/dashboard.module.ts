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
  RiFlagLine,
  RiFileList2Line,
  RiLineChartLine,
} from 'angular-remix-icon';
import {
  TippyModule,
  tooltipVariation,
  popperVariation,
} from '@ngneat/helipopper';
import { ButtonModule, ModalModule, TooltipModule } from 'zigzag';
import { ReportFakeComponent } from './report-fake/report-fake.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const icons = {
  RiAncientGateFill,
  RiHome3Fill,
  RiHome3Line,
  RiFlagLine,
  RiFileList2Line,
  RiLineChartLine,
};
@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    DashboardHeaderComponent,
    ReportFakeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    TippyModule.forRoot({
      defaultVariation: 'tooltip',
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation,
      },
    }),

    ButtonModule,
    ModalModule,
    TooltipModule,
    RemixIconModule.configure(icons),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
