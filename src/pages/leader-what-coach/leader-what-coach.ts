import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LeaderWhatCoachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leader-what-coach',
  templateUrl: 'leader-what-coach.html',
})
export class LeaderWhatCoachPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  gotoBoot() {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderWhatCoachPage');
  }

}