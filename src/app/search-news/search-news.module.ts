import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchNewsRoutingModule } from './search-news-routing.module';
import { SearchNewsComponent } from './search-news.component';


@NgModule({
  declarations: [
    SearchNewsComponent
  ],
  imports: [
    CommonModule,
    SearchNewsRoutingModule
  ]
})
export class SearchNewsModule { }
