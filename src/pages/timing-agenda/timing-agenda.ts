import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { MainScreenPage } from '../main-screen/main-screen';

/**
 * Generated class for the TimingAgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timing-agenda',
  templateUrl: 'timing-agenda.html',
})
export class TimingAgendaPage {
  questionType;
  minutes;
  sections;
  currentTimeInSeconds;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appProvider: AppProvider
    ) {

      this.questionType = this.appProvider.questionType;
      this.minutes = this.appProvider.minutes;
      this.currentTimeInSeconds = this.minutes * 60;
      this.appProvider.getQuestion().subscribe(async res => {
        console.log(res);
        this.sections = res.data;
        this.sections.forEach(element => {
          element.prevTime = this.minutes*element.percent/100;
        });
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimingAgendaPage');
  }

  // returnMinutesByPercent(percent){
  //   return this.minutes*percent/100;
  // }

  increase(index){
  //  const increasePerMinute = 1 * (100/this.minutes);
  //  this.sections[index].percent += increasePerMinute;
  this.sections[index].prevTime++;
  this.minutes++;

    
  }
  decrease(index){
    // const decreasePerMinute = 1 * (100/this.minutes);
    // this.sections[index].percent -= decreasePerMinute; 
    this.sections[index].prevTime--;
    this.minutes--;
   }
  increaseOverAll(){
    this.minutes++;
    this.sections.forEach(element => {
      element.prevTime = this.minutes*element.percent/100;
    });
  }
  decreaseOverAll(){
  this.minutes--;
  this.sections.forEach(element => {
    element.prevTime = this.minutes*element.percent/100;
  });
  }
  swipeEvent(e){
    console.log(e);
    if(e.offsetDirection === 4){
      this.navCtrl.pop()
    } 
    else if(e.offsetDirection === 2){
      this.navCtrl.push(MainScreenPage, {timeSetToAgendaPage: this.sections})
    }
  }
}
