import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { News } from '../shared/models/news.interface';
import { AuthService } from '../shared/services/auth.service';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
  constructor(
    private common_: CommonService,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService
  ) {}

  singleNews$: Observable<News>;
  id: string;
  userid: string;
  item: News;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['news-id'];
    this.singleNews$ = this.common_.getsinglenews(this.id);
    this.singleNews$.subscribe((el) => {
      this.item = el;
      console.log(el);
      // this.item.image =
      //   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png';
    });

    this.auth.me().subscribe((el: any) => {
      console.log(el);
      this.id = el?.id;
    });
  }

  copy(pollid: string) {
    // let url = 'localhost:4200';
    let url = 'https://fake-checker.vercel.app';

    let value = `${url}/poll/${pollid}`;
    navigator.clipboard.writeText(value);
  }
}
