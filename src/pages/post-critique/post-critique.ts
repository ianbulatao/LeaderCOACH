import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AppProvider } from '../../providers/app/app';
import { BreakDownTimePage } from '../break-down-time/break-down-time';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the PostCritiquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-critique',
  templateUrl: 'post-critique.html',
})
export class PostCritiquePage {

  questions;
  // numberSelected;
  // YesOrNoSelected;
  answer
  activeIndex = 0;
  totalTimeConsumed = 0;
  type = '';
  personalType = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public appProvider: AppProvider, private toastCtrl: ToastController) {
    console.log(this.navParams.get('sections'))
    this.totalTimeConsumed = this.appProvider.TimeConsumedInSeconds;
    console.log(this.totalTimeConsumed)
    this.type = this.appProvider.type;
    this.questions = [
      {question: 'Would you like to evaluate your session?', isYesNo: true, answer: null},
      {question: 'To what extent did you get insights?', isNumber: true, answer: null, type: 'energyLevel'},
      {question: 'To what extent did you identify actions?', isNumber: true, answer: null, type: 'energyLevel'},
      {question: 'To what extent was your objective for the session achieved?', isNumber: true, answer: null, type: 'energyLevel'},
      {question: 'To what extent were the ground rules obeyed?', isNumber: true, answer: null, type: 'energyLevel'},
      {question: 'What helped?', isText: true},
      {question: 'What hindered?', isText: true},
      {question: 'Was the time you allotted…', isAlloted: true},
      {question: 'What’s your personality type?', isDropDown: true},
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostCritiquePage');
  }
  select(answer){
    this.questions[this.activeIndex].answer = answer;
    console.log(this.questions)
    this.nextStage();
   
  }
  
  swipeEvent(e){
    this.presentToast(e);
  }
  presentToast(e) { 
    let duration:number = 2000;
    let elapsedTime:number = 0;
    let intervalHandler = setInterval( () => { elapsedTime += 10; },10);   
    let toast = this.toastCtrl.create({
      message: 'Do you want to proceed?',
      position: 'middle',
      duration: duration,
      showCloseButton: true,
      closeButtonText: "Proceed",
      cssClass: 'toast'
    });
    
    toast.onDidDismiss(() => {
      clearInterval(intervalHandler);
      if (elapsedTime < duration){
        console.log('Procceed');
        console.log(e);
        if (e.offsetDirection === 2) {
          this.nextStage();
        } 
      }
    });
    
    toast.present();
  }

  
  nextStage(){
    setTimeout(()=> {
      if(this.activeIndex == 0){
        if(this.questions[this.activeIndex].answer == 'no'){
          this.navCtrl.setRoot(HomePage);
        } else {
          this.activeIndex = 1;
        }
      } else if(this.activeIndex == 1){
        this.activeIndex = 2;
      } else if(this.activeIndex == 2){
        this.activeIndex = 3;
      } else if(this.activeIndex == 3){
        if(this.type == 'lead_a_meeting'){
          this.activeIndex = 4;
        } else {
          this.activeIndex = 5;
        }
      } else if(this.activeIndex == 4){
        this.activeIndex = 5;
      } else if(this.activeIndex == 5){
        this.activeIndex = 6;
      } else if(this.activeIndex == 6){
        this.activeIndex = 7;
      } else if(this.activeIndex == 7){
        this.activeIndex = 8;
      }else if(this.activeIndex == 8){
        this.navCtrl.push(BreakDownTimePage, {sections: this.navParams.get('sections'), personalType: this.personalType});
      }
    },20)
  }

}
