import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollRoutingModule } from './poll-routing.module';
import { PollComponent } from './poll.component';
import {
  RemixIconModule,
  RiThumbUpFill,
  RiThumbDownFill,
  RiBugLine,
  RiSeedlingLine,
  RiChat1Line,
  RiSkull2Line,
  RiChatPollLine,
} from 'angular-remix-icon';

const icons = {
  RiThumbUpFill,
  RiThumbDownFill,
  RiBugLine,
  RiSeedlingLine,
  RiChat1Line,
  RiSkull2Line,
  RiChatPollLine,
};

@NgModule({
  declarations: [PollComponent],
  imports: [CommonModule, PollRoutingModule, RemixIconModule.configure(icons)],
})
export class PollModule {}
