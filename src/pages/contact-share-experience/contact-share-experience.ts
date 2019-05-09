import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { HomePage } from '../home/home';

/**
 * Generated class for the ContactShareExperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-share-experience',
  templateUrl: 'contact-share-experience.html'
})
export class ContactShareExperiencePage {
  subject = 'Application Experience';
  message = '';
  mailgunUrl: string;
  mailgunApiKey: string;
  public http: HTTP;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.mailgunUrl = "sandbox5cff8575cea94f24a5faa0f9c4c0fb12.mailgun.org";
    this.mailgunApiKey = window.btoa("api:4cc6bb317c28ca6c8f9c659a718d75e0-e566273b-39abe374");
  }

  gotoBoot() {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }
  
  send() {
    let headers = {
      'Authorization': 'Basic ' + this.mailgunApiKey,
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    let body = {
      from: 'test@email.com',
    to: 'ian08bulatao@gmail.com',
      subject: this.subject,
        text: this.message
  }

    let url = 'https://api.mailgun.net/v3/' + this.mailgunUrl + '/messages';

    return this.http.post(url, body, headers);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactShareExperiencePage');
  }

}
