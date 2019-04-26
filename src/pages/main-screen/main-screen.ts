import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';

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

        //add time percent calculated property of section 
        for(let section of this.sections){
          section.time = this.currentTimeInSeconds*section.percent/100;
          section.timeTotal = this.currentTimeInSeconds*section.percent/100;
          section.questionTime = (this.currentTimeInSeconds*section.percent/100)/section.questions.length;
          section.questionTimeTotal = (this.currentTimeInSeconds*section.percent/100)/section.questions.length;
        }
        console.log(this.sections)
        this.defaultWidthSection = 50/(this.sections.length - 1);
        console.log(this.sections.length);
        console.log(this.defaultWidthSection)

        this.startTimer();

        // this.slides.lockSwipes(true);

      })

   
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
    if( (this.sections.length-1) != this.activeIndex ){
      this.activeIndex++;
      this.slideIndex = 0;
      this.phaseStatementTimer = 0;
      // this.slides.lockSwipes(false);
      this.slides.slideTo(this.slideIndex, 500);
    }
  }
  prevSection(){
    if(this.activeIndex != 0){
      this.activeIndex--;
      this.slideIndex = 0;
      this.phaseStatementTimer = 0;
      // this.slides.lockSwipes(false);
      this.slides.slideTo(this.slideIndex, 500);
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
   
  this.timerInterval2 = setInterval(()=> {
    this.phaseStatementTimer += 0.01;
    if(this.slides.getActiveIndex() == 0 ){
      if(this.phaseStatementTimer >= 3){
        this.slides.slideNext();
      }
    } else {
      this.currentTimeInSeconds = this.currentTimeInSeconds - 0.01;
      this.currentTimeConsumedInSeconds+=0.01;
      this.sections[this.activeIndex].time = this.sections[this.activeIndex].time - 0.01;
  
      if(!this.isPause){
  
      this.sections[this.activeIndex].questionTime = this.sections[this.activeIndex].questionTime - 0.01; 
      this.currentTime+=0.01;
  
      if(!this.isPause){
        if( this.sections[this.activeIndex].questionTime <= 0 && this.sections[this.activeIndex].questions.length -1 == this.slides.getActiveIndex() && this.currentTime >= this.sections[this.activeIndex].timeTotal){
          this.nextSection();
          this.currentTime = 0;
          this.phaseStatementTimer = 0;
        
        } else if(this.sections[this.activeIndex].questionTime <= 0){
          // this.slides.lockSwipes(false);
          console.log('active slide index',this.slides.getActiveIndex())
          // this.slideIndex = this.slides.getActiveIndex() + 1;
          // console.log('slide next' + this.slideIndex)
          this.slides.slideNext();
          this.sections[this.activeIndex].questionTime = this.sections[this.activeIndex].questionTimeTotal;
        }
        
      }
      }
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
      this.nextSection();
    }
 }

}
