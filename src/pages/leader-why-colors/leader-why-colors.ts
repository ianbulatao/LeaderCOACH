import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the LeaderWhyColorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leader-why-colors',
  templateUrl: 'leader-why-colors.html',
})
export class LeaderWhyColorsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  gotoBoot() {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderWhyColorsPage');
  }

}
