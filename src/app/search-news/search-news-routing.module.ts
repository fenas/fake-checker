import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchNewsComponent } from './search-news.component';

const routes: Routes = [{ path: '', component: SearchNewsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchNewsRoutingModule { }
