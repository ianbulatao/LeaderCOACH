import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeInputPage } from './time-input';

@NgModule({
  declarations: [
    TimeInputPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeInputPage),
  ],
})
export class TimeInputPageModule {}
