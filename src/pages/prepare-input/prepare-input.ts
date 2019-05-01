import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimeInputPage } from '../time-input/time-input';
import { MainScreenPage } from '../main-screen/main-screen';
import { PreparePage } from '../prepare/prepare';

/**
 * Generated class for the PrepareInputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prepare-input',
  templateUrl: 'prepare-input.html',
})
export class PrepareInputPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrepareInputPage');
  }
  swipeEvent(e){
    console.log(e);
    if(e.offsetDirection === 4){
      this.navCtrl.pop()
    } 
    else if(e.offsetDirection === 2){
      this.navCtrl.push(MainScreenPage);
    } 
  }
  startNow(){
    this.navCtrl.push(PreparePage, {isStartNow: true});
  }
  prepare(){
    this.navCtrl.push(PreparePage);
  }
}
