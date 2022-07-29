import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailsRoutingModule } from './news-details-routing.module';
import { NewsDetailsComponent } from './news-details.component';
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
const icons = {
  RiBugLine,
  RiSeedlingLine,
  RiChat1Line,
  RiSkull2Line,
  RiChatPollLine,
};

@NgModule({
  declarations: [NewsDetailsComponent],
  imports: [
    CommonModule,
    NewsDetailsRoutingModule,
    RemixIconModule.configure(icons),
    TippyModule.forRoot({
      defaultVariation: 'tooltip',
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation,
      },
    }),
  ],
})
export class NewsDetailsModule {}
