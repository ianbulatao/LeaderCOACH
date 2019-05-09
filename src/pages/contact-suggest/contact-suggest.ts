import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-contact-suggest',
  templateUrl: 'contact-suggest.html'
})
export class ContactSuggestPage {
  subject = 'Application Suggestion'
  message = ''
  mailgunUrl: string;
  mailgunApiKey: string;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public http: HttpClient
    ) {
    this.mailgunUrl = "sandbox5cff8575cea94f24a5faa0f9c4c0fb12.mailgun.org";
    this.mailgunApiKey = window.btoa("api:4cc6bb317c28ca6c8f9c659a718d75e0-e566273b-39abe374");
  }

  gotoBoot() {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }
  presentToast(ers) {
    let toast = this.toastCtrl.create({
      message: ers,
      position: 'middle',
      duration: 300,
      showCloseButton: true
    });

    toast.onDidDismiss(() => {});

    toast.present();
  }
  send() {

    this.http.post("https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages", "from=admin@test101.com&to=" + "ian08bulatao@gmail.com" + "&subject=" + this.subject + "&text=" + this.message,
      {
        headers: { 'Authorization': 'Basic ' + this.mailgunApiKey, "Content-Type": "application/x-www-form-urlencoded" },
      }).subscribe(success => {
        this.presentToast(success);
      }, error => {
        this.presentToast(error);
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactSuggestPage');
  }

}
