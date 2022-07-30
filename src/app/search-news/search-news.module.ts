import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchNewsRoutingModule } from './search-news-routing.module';
import { SearchNewsComponent } from './search-news.component';
import {
  RemixIconModule,
  RiBugLine,
  RiSeedlingLine,
  RiChat1Line,
  RiSkull2Line,
  RiChatPollLine,
} from 'angular-remix-icon';
import {
  TippyModule,
  tooltipVariation,
  popperVariation,
} from '@ngneat/helipopper';
import { FakenessScorePipeModule } from '../shared/pipe/fakeness-score.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const icons = {
  RiBugLine,
  RiSeedlingLine,
  RiChat1Line,
  RiSkull2Line,
  RiChatPollLine,
};
@NgModule({
  declarations: [SearchNewsComponent],
  imports: [
    CommonModule,
    SearchNewsRoutingModule,
    RemixIconModule.configure(icons),
    TippyModule.forRoot({
      defaultVariation: 'tooltip',
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation,
      },
    }),

    ReactiveFormsModule,
    FormsModule,
    FakenessScorePipeModule,
  ],
})
export class SearchNewsModule {}
