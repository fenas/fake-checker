import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private activatedRoute: ActivatedRoute,
    private common_: CommonService
  ) {
    this.id = this.activatedRoute.snapshot.params['poll_id'];
    console.log(this.id);

    this.polldetails$ = this.common_.pollFetch(this.id);

    this.polldetails$.subscribe(console.log);
  }

  ngOnInit(): void {}
}
