import { Component, OnInit } from '@angular/core';
import { DemoDataService } from '../shared/services/demo-data.service';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.scss'],
})
export class SearchNewsComponent implements OnInit {
  constructor(public demoDataServ_: DemoDataService) {}

  ngOnInit(): void {}
}
