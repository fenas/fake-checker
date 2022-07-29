import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { News } from '../shared/models/news.interface';
import { AuthService } from '../shared/services/auth.service';

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
    private common_: CommonService,
    private auth: AuthService,
    private router: Router
  ) {
    this.news$ = this.common_.searchNews();
    this.news$.subscribe(console.log);
  }

  id = '';

  ngOnInit(): void {
    this.auth.me().subscribe((el: any) => {
      console.log(el);
      this.id = el?.id;
    });
  }

  news: any = [];

  copy(pollid: string) {
    // let url = 'localhost:4200';

    let url = 'https://fake-checker.vercel.app/';
    let value = `${url}/poll/${pollid}`;
    navigator.clipboard.writeText(value);
  }

  clicked(id: string) {
    this.router.navigate([`news-details/${id}`]);
  }
}
