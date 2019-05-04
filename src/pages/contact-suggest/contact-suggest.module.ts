import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactSuggestPage } from './contact-suggest';

@NgModule({
  declarations: [
    ContactSuggestPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactSuggestPage),
  ],
})
export class ContactSuggestPageModule {}
