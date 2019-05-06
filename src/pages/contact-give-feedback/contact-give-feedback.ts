import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';


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
    private emailComposer: EmailComposer,
    public toastCtrl: ToastController
  ) {
  }

  gotoBoot() {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }
  validate(res) {
    let messageContent;
    if (!res) messageContent = 'Response Sent!';
    else messageContent = 'Response not Sent!'
    let toast = this.toastCtrl.create({
      message: messageContent,
      duration: 3000
    });
    toast.present();
  }
  send() {
    let email = {
      to: 'ian08bulatao@gmail.com',
      subject: this.subject,
      body: this.body,
      isHtml: true
    }
    this.emailComposer.open(email, err => {
      this.validate(err);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactGiveFeedbackPage');
  }

}
