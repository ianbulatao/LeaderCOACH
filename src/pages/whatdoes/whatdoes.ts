import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the WhatdoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-whatdoes',
  templateUrl: 'whatdoes.html',
})
export class WhatdoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public events: Events) {
  }
  
  gotoBoot() {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WhatdoesPage');
  }
}
