import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimingAgendaPage } from './timing-agenda';

@NgModule({
  declarations: [
    TimingAgendaPage,
  ],
  imports: [
    IonicPageModule.forChild(TimingAgendaPage),
  ],
})
export class TimingAgendaPageModule {}
