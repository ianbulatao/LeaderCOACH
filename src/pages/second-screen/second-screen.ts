import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AppProvider } from '../../providers/app/app';
import { TimeInputPage } from '../time-input/time-input';

/**
 * Generated class for the SecondScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second-screen',
  templateUrl: 'second-screen.html',
})
export class SecondScreenPage {
  title: string = '';
  description: string = '';
  type: string = '';
  list: Array<any> = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appProvider: AppProvider
    ) {
    this.type = this.navParams.get('type');
    console.log(this.type)
    this.appProvider.getAllList().subscribe(res => {
      console.log(res)
      this.title = res[this.type].title;
      this.description = res[this.type].description
      this.list = res[this.type].list;
    })
  }

  ionViewDidLoad() { console.log('ionViewDidLoad SecondScreenPage'); }
  swipeEvent(e){
    console.log(e);
    if(e.offsetDirection === 4){
      this.navCtrl.pop();
    }
  }
  gotoInputTime(questionType){
    this.navCtrl.push(TimeInputPage, {type: this.type})
    this.appProvider.questionType = questionType;
  }
  
}
