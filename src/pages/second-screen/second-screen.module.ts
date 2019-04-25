import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondScreenPage } from './second-screen';

@NgModule({
  declarations: [
    SecondScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondScreenPage),
  ],
})
export class SecondScreenPageModule {}
