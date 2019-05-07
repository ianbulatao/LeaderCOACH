import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { PostCritiquePage } from '../post-critique/post-critique';

/**
 * Generated class for the MainScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-screen',
  templateUrl: 'main-screen.html',
})


export class MainScreenPage {

@ViewChild('slides') slides: Slides;

  isPause: boolean = false;
  minutes;
  // seconds;
  currentTimeInSeconds;
  currentTimeConsumedInSeconds = 0;
  currentTime = 0;
  timerInterval;
  timerInterval2;
  sections: Array<any> = [];
  questionType: string = '';
  defaultWidthSection;
  activeIndex = 0;
  slideIndex = 0;
  isPhaseStatement = true;
  phaseStatementTimer = 0;
  isSlide = false;
  hideTimer;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appProvider: AppProvider
    ) {
      console.log(this.navParams.get('timeSetToAgendaPage'))
      this.questionType = this.appProvider.questionType;
      this.minutes = this.appProvider.minutes;
      this.currentTimeInSeconds = this.minutes * 60;
      if(this.navParams.get('timeSetToAgendaPage')){
        this.sections = this.navParams.get('timeSetToAgendaPage');
        const a = async () => {
          for(let section of this.sections){
            section.time = section.prevTime*60;
            section.timeTotal = section.prevTime*60;
            section.questionTime = (section.prevTime*60)/(section.questions.length-1);
            section.questionTimeTotal = (section.prevTime*60)/(section.questions.length-1);
          }
          this.defaultWidthSection = 30/(this.sections.length - 1);
          this.startTimer();
        }
        a();
      } else {
        this.appProvider.getQuestion().subscribe(async res => {
          console.log(res);
          this.sections = res.data;
  
          //add time percent calculated property of section 
          for(let section of this.sections){
            section.time = this.currentTimeInSeconds/this.sections.length;
            section.timeTotal = this.currentTimeInSeconds/this.sections.length;
            section.questionTime = (this.currentTimeInSeconds/this.sections.length)/(section.questions.length-1);
            section.questionTimeTotal = (this.currentTimeInSeconds/this.sections.length)/(section.questions.length-1);
          }

          this.defaultWidthSection = 30/(this.sections.length - 1);
          this.startTimer();
          
        })
      }
    this.hideTimer = this.appProvider.timerStat;
  }
  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainScreenPage');
    this.slides.ionSlideTransitionEnd.subscribe((res) => {
        console.log('slide end');
        // this.slides.lockSwipes(true);
    })
  }

  swipeEvent(e){
    console.log(e);
    if(e.offsetDirection === 4){
      this.navCtrl.pop();
    }
  }

  play(){
    this.isPause = false;
    this.slides.lockSwipes(false);
  }
  pause(){
    this.isPause = true;
    this.slides.lockSwipes(true );
  }
  nextSection(){
    this.isSlide = true;
    if( this.sections.length-1 != this.activeIndex ){
      this.activeIndex++;
      this.slideIndex = 0;
      this.phaseStatementTimer = 0;
      // this.slides.lockSwipes(false);
      this.slides.slideTo(this.slideIndex, 1);
      // this.isSlide = false;
    }
  }
  prevSection(){
    this.isSlide = true;
    if(this.activeIndex != 0){
      this.activeIndex--;
      this.slideIndex = 0;
      this.phaseStatementTimer = 0;
      // this.slides.lockSwipes(false);
      this.slides.slideTo(this.slideIndex, 1);
      // this.isSlide = false;
    }
  }

  convertSecondstoTime(seconds) { 
    /* extend the String by using prototypical inheritance */
    seconds = parseInt(seconds, 10); // don't forget the second param
     let hours:any   = Math.floor(seconds / 3600);
     let minutes:any = Math.floor((seconds - (hours * 3600)) / 60);
     seconds = seconds - (hours * 3600) - (minutes * 60);

     if (hours   < 10) {hours   = "0"+hours;}
     if (minutes < 10) {minutes = "0"+minutes;}
     if (seconds < 10) {seconds = "0"+seconds;}
     var time    = hours+':'+minutes+':'+seconds;
     return time;
 }
 startTimer(){
//  this.timerInterval = setInterval(()=>{
//    this.currentTimeInSeconds--;
//    this.currentTimeConsumedInSeconds++;
//    this.sections[this.activeIndex].time--;
//    console.log(this.sections[this.activeIndex].questionTime)
//    if(!this.isPause){
      
        
//    }
//    console.log(this.sections[this.activeIndex].time,this.sections[this.activeIndex].timeTotal)
//    },1000)
    this.timerInterval2 = setInterval(() => {
      if (this.slides.getActiveIndex() == 0) {
        this.phaseStatementTimer += 0.01;
        if (this.phaseStatementTimer >= 3) {
          this.phaseStatementTimer = 0;
          this.slides.slideNext();
        }
      } else {

        if (!this.isPause) {

          this.sections[this.activeIndex].questionTime = this.sections[this.activeIndex].questionTime - 0.01;
          this.currentTime += 0.01;

          if (!this.isPause) {
            if (this.sections[this.activeIndex].questionTime <= 0 &&
              this.sections[this.activeIndex].questions.length - 1 == this.slides.getActiveIndex() &&
              this.currentTime >= this.sections[this.activeIndex].timeTotal) {
              this.nextSection();
              this.currentTime = 0;
              this.phaseStatementTimer = 0;
            }
            else if (this.appProvider.isSlide){
              if (this.sections[this.activeIndex].questionTime <= 0) {
                // this.slides.lockSwipes(false);
                console.log('active slide index', this.slides.getActiveIndex())
                // this.slideIndex = this.slides.getActiveIndex() + 1;
                // console.log('slide next' + this.slideIndex)
                this.slides.slideNext();
                this.sections[this.activeIndex].questionTime = this.sections[this.activeIndex].questionTimeTotal;
              }
           }
          }
        }
        // if(!this.isSlide){
        this.currentTimeInSeconds = this.currentTimeInSeconds - 0.01;
        this.currentTimeConsumedInSeconds += 0.01;
        this.sections[this.activeIndex].time = this.sections[this.activeIndex].time - 0.01;
        // }

      }


    }, 10) 
  }


 

 ionViewDidLeave(){
  clearInterval(this.timerInterval);
  clearInterval(this.timerInterval2);

 }
 getPercentWidthSectionTime(value, total){
  if( 100*value/total > 0 ){
    return 100*value/total
  } else {
    return 0;
  }
 }
 onSlideDrag(e){
    if(e.offsetDirection == 2 && this.sections[this.activeIndex].questions.length -1 == this.slides.getActiveIndex()){
      if(this.activeIndex >= this.sections.length-1 && this.sections[this.activeIndex].questions.length-1 <= this.slides.getActiveIndex()) {
        this.done();
      } else {
        this.nextSection();
      }
    }
 }
 done(){
   this.appProvider.TimeConsumedInSeconds = this.currentTimeConsumedInSeconds;
   this.navCtrl.push(PostCritiquePage, {sections: this.sections});
 }
}
