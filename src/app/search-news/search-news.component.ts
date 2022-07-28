import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../shared/models/news.interface';

import { CommonService } from '../shared/services/common.service';
import { DemoDataService } from '../shared/services/demo-data.service';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.scss'],
})
export class SearchNewsComponent implements OnInit {
  readonly news$: Observable<News[]>;

  constructor(
    public demoDataServ_: DemoDataService,
    private common_: CommonService
  ) {
    this.news$ = this.common_.searchNews();
  }

  ngOnInit(): void {}

  news: any = [];
}
