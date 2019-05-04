import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { HomePage } from '../home/home';

/**
 * Generated class for the ContactSuggestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-suggest',
  templateUrl: 'contact-suggest.html',
})
export class ContactSuggestPage {
  subject = 'Application Suggestion'
  body = 'Whats your feedback'


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public emailComposer: EmailComposer) {
  }

  gotoBoot() {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }

  send() {
    let email = {
      to: 'ian08bulatao@gmail.com',
      cc: 'kathleenfaithmamiad24@gmail.com',
      subject: this.subject,
      body: this.body,
      isHtml: false
    }
    this.emailComposer.open(email);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactSuggestPage');
  }

}
