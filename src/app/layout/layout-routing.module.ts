import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {
        path: '',
        loadChildren: () =>
          import('../landing/landing.module').then((m) => m.LandingModule),
      },
      {
        path: 'search-news',
        loadChildren: () =>
          import('../search-news/search-news.module').then(
            (m) => m.SearchNewsModule
          ),
      },
      {
        path: 'poll',
        loadChildren: () =>
          import('../poll/poll.module').then((m) => m.PollModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
