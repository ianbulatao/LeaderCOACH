import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GroundRulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ground-rules',
  templateUrl: 'ground-rules.html',
})
export class GroundRulesPage {
  rules = [];
  rule;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroundRulesPage');
  }
  swipeEvent(e){
    console.log(e);
    if(e.offsetDirection === 4){
      this.navCtrl.pop()
    } 
    else if(e.offsetDirection === 2){
      this.navCtrl.pop()
    }
  }
  addrules(){
    this.rules.push(this.rule)
  }
}
