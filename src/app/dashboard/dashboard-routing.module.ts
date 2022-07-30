import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ReportFakeComponent } from './report-fake/report-fake.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../search-news/search-news.module').then(
            (m) => m.SearchNewsModule
          ),
      },
      
      {
        path: 'report',
        component: ReportFakeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
