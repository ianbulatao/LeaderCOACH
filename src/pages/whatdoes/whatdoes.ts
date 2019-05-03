import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhatdoesPage');
  }
  swipeEvent(e){
    console.log(e);
    if(e.offsetDirection === 4){
      this.navCtrl.pop();
    }
  }
}
