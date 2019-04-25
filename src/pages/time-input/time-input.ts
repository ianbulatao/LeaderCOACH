import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecondScreenPage } from '../second-screen/second-screen';
import { PrepareInputPage } from '../prepare-input/prepare-input';
import { AppProvider } from '../../providers/app/app';

/**
 * Generated class for the TimeInputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-input',
  templateUrl: 'time-input.html',
})
export class TimeInputPage {
  type: string = '';
  minutes: number;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appProvider: AppProvider
    ) {
    this.type = this.navParams.get('type');
    if(this.type === 'coach_myself'){
      this.minutes = 10;
    } else if(this.type === 'coach_someone'){
      this.minutes = 15;
    } else {
      this.minutes = 30;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeInputPage');
  }
  swipeEvent(e){
    console.log(e);
    if(e.offsetDirection === 4){
      this.navCtrl.pop();
    } else if(e.offsetDirection === 2){
      this.appProvider.minutes = this.minutes;
      this.navCtrl.push(PrepareInputPage);
    } 
  }
  continue(){
    this.appProvider.minutes = this.minutes;
    this.navCtrl.push(PrepareInputPage);
  }
}
