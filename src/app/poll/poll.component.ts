import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PollResults } from '../shared/models/poll_results.interface';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss'],
})
export class PollComponent implements OnInit {
  id: string;
  polldetails$: Observable<PollResults>;
  fakenessScore: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private common_: CommonService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['poll_id'];
    console.log(this.id);
    this.polldetails$ = this.common_.pollFetch(this.id);
    this.polldetails$.subscribe((el) => {
      this.fakenessScore = el.news.fakeness_score;
    });
  }

  ngOnInit(): void {}

  vote(type: string) {
    this.common_.vote(this.id, type).subscribe((el) => {
      // this.polldetails$ = this.common_.pollFetch(this.id);
      this.router.navigateByUrl('/search-news');
    });
  }
}
