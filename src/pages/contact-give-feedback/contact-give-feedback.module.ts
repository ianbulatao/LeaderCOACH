import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactGiveFeedbackPage } from './contact-give-feedback';

@NgModule({
  declarations: [
    ContactGiveFeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactGiveFeedbackPage),
  ],
})
export class ContactGiveFeedbackPageModule {}
