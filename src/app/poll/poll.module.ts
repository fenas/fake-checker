import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollRoutingModule } from './poll-routing.module';
import { PollComponent } from './poll.component';
import {
  RemixIconModule,
  RiThumbUpFill,
  RiThumbDownFill,
} from 'angular-remix-icon';

const icons = {
  RiThumbUpFill,
  RiThumbDownFill,
};

@NgModule({
  declarations: [PollComponent],
  imports: [CommonModule, PollRoutingModule, RemixIconModule.configure(icons)],
})
export class PollModule {}
