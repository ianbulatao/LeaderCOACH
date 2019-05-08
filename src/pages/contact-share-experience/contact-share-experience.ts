import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ContactShareExperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-share-experience',
  templateUrl: 'contact-share-experience.html',
})
export class ContactShareExperiencePage {
  subject = 'Application Experience'
  body = ''

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public emailComposer: EmailComposer,
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
    let duration: number = 2000;
    let elapsedTime: number = 0;
    let intervalHandler = setInterval(() => { elapsedTime += 10; }, 10);
    let toast = this.toastCtrl.create({
      message: messageContent,
      position: 'middle',
      duration: duration,
      showCloseButton: true,
      closeButtonText: "Proceed",
      cssClass: 'toast'
    });

    toast.onDidDismiss(() => { });

    toast.present();
  }
  send() {
    let email = {
      to: 'ian08bulatao@gmail.com',
      subject: this.subject,
      body: this.body,
      isHtml: true
    }
    this.emailComposer.open(email, (err) => {
      this.validate(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactShareExperiencePage');
  }

}
