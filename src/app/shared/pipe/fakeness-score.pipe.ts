import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { I } from 'ts-toolbelt';
import { News } from '../models/news.interface';

@Pipe({
  name: 'FakenessScore',
})
export class FakenessScorePipe implements PipeTransform {
  transform(news: News) {
    const fakeness_score = news.fakeness_score;
    const not_reported_fake = news.poll_results[0].reported_not_fake_by;
    const reported_fake = news.poll_results[0].reported_fake_by;
    const totalVotes = not_reported_fake + reported_fake;
    let updateFaknessScore = 0;
    if (totalVotes > 0) {
      let fakePerc = (reported_fake * 100) / totalVotes;
      updateFaknessScore = fakeness_score + fakePerc - 25;
    } else {
      updateFaknessScore = fakeness_score;
    }

    console.log(
      fakeness_score,
      not_reported_fake,
      reported_fake,
      updateFaknessScore
    );
    return updateFaknessScore;
  }
}

@NgModule({
  declarations: [FakenessScorePipe],
  exports: [FakenessScorePipe],
})
export class FakenessScorePipeModule {}
