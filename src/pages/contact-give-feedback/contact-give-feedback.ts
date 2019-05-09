import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';


/**
 * Generated class for the ContactGiveFeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-give-feedback',
  templateUrl: 'contact-give-feedback.html',
})
export class ContactGiveFeedbackPage {
  subject = 'Application Feedback'
  body = ''

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: HttpClient
  ) {
  }

  gotoBoot() {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }
  // send() {
  //   let email = {
  //     "to_email": "ian08bulatao@gmail",
  //     "subject": "Feedback",
  //     "message": this.body,
  //     "email_type_option": true
  //   }
  //   this.http.post('https://us20.api.mailchimp.com/3.0/', { email })
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactGiveFeedbackPage');
  }

}
