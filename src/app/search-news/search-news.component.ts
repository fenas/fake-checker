import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/services/common.service';
import { DemoDataService } from '../shared/services/demo-data.service';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.scss'],
})
export class SearchNewsComponent implements OnInit {
  constructor(
    public demoDataServ_: DemoDataService,
    private common_: CommonService
  ) {}

  ngOnInit(): void {
    this.searchNews();
  }

  searchNews() {
    this.common_.searchNews().subscribe((el) => {
      console.log(el);
    });
  }
}
