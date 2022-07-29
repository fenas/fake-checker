import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseNews } from 'src/app/shared/models/news.interface';
import { CommonService } from 'src/app/shared/services/common.service';
@Component({
  selector: 'app-report-fake',
  templateUrl: './report-fake.component.html',
  styleUrls: ['./report-fake.component.scss'],
})
export class ReportFakeComponent implements OnInit {
  constructor(private fb: FormBuilder, private commonSERv_: CommonService) {}

  reportForm = this.fb.group({
    heading: ['', Validators.required],
    url: ['', Validators.required],
    type: ['', Validators.required],
    why_fake: ['', Validators.required],
    date_of_news: ['', Validators.required],

    // news_auther: ['', Validators.required],

    image: [''],

    other_outlet_running: ['', Validators.required],
    author_has_contact: ['', Validators.required],
    read_whole_new: ['', Validators.required],
  });

  ngOnInit(): void {}

  submitform() {
    console.log(this.reportForm);

    if (this.reportForm.valid) {
      let fakenessScore = this.calculateFaknessScore();

      let news: BaseNews = {
        heading: this.reportForm.value.heading!,
        url: this.reportForm.value.url!,
        image: this.reportForm.value.image!,
        news_author: '',
        why_fake: this.reportForm.value.why_fake!,
        type: this.reportForm.value.type!,
        date_of_news: new Date(this.reportForm.value.date_of_news!)!,
        date_reported: new Date(),
        fakeness_score: fakenessScore,
        other_outlet_running: this.convertToBoolean(
          this.reportForm.value.other_outlet_running!
        )!,
        author_has_contact: this.convertToBoolean(
          this.reportForm.value.author_has_contact!
        )!,
        read_whole_new: this.convertToBoolean(
          this.reportForm.value.read_whole_new!
        )!,
      };

      console.log(news);

      this.commonSERv_.postNews(news).subscribe((el) => {
        console.log(el);
      });
    }
  }

  convertToBoolean(type: string) {
    if (type == 'true') {
      return true;
    } else {
      return false;
    }
  }

  calculateFaknessScore() {
    let other_outlets_running = this.reportForm.value.other_outlet_running;
    let auther_have_contact = this.reportForm.value.author_has_contact;
    let whole_story = this.reportForm.value.read_whole_new;

    let score = 0;
    if (other_outlets_running == 'false') {
      score = score + 10;
    }

    if (auther_have_contact == 'false') {
      score = score + 10;
    }

    if (whole_story == 'false') {
      score = score + 5;
    }

    console.log(score);
    return score;
  }
}
