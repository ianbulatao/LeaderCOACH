import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { TimingAgendaPage } from '../timing-agenda/timing-agenda';

/**
 * Generated class for the PreparePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prepare',
  templateUrl: 'prepare.html',
})
export class PreparePage {
  questions;
  // numberSelected;
  // YesOrNoSelected;
  answer
  activeIndex = 0;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appProvider: AppProvider
  ) {
    if(this.appProvider.type === 'coach_myself'){
      this.questions = [
        {question: 'What’s your energy level?', isNumber: true, answer: null, type: 'energyLevel'},
        {question: 'Is this the best time?', isYesNo: true, answer: null, type: 'bestEnergyLevel'},
        {question: 'When might your energy be higher?', isText: true, answer: null, type: 'whenEnergyLevel'},
        {question: 'Have you minimized distractions?',isNumber: true, answer: null, type: 'distractions'},
        {question: 'Is this the best time?', isYesNo: true, answer: null},
        {question: 'What would help you focus more?', isText: true, answer: null},
        {question: 'What’s your objective in the time allotted for this session?', isText: true, answer: null},
      ]
    } else if(this.appProvider.type === 'coach_someone') {
      this.questions = [
        {question: 'What’s your energy level?', isNumber: true, answer: null, type: 'energyLevel'},
        {question: 'Is this the best time?', isYesNo: true, answer: null, type: 'bestEnergyLevel'},
        {question: 'When might your energy be higher?', isText: true, answer: null, type: 'whenEnergyLevel'},
        {question: 'Have you minimized distractions?',isNumber: true, answer: null, type: 'distractions'},
        {question: 'Is this the best time?', isYesNo: true, answer: null},
        {question: 'What would help you focus more?', isText: true, answer: null},
        {question: 'What’s your intention in this conversation?', isText: true, answer: null},
        {question: 'What is this person’s preferred style (of interacting)?', isText: true, answer: null},
        {question: 'How will you adjust your style to maximize their engagement?', isText: true, answer: null},
        {
          question: 'Reflecting on their personal needs in this conversation, which of these do you need to enhance and how?',
          isChoices: true, 
          isText: true, 
          answer: null,
          choice: null,
          choices: [
            "Status – actively listen; esteem them; express confidence in them",
            "Certainty – announce the topic, duration, purpose, your intention",
            "Autonomy – maximize their free will/choice; give them options",
            "Relatedness – establish rapport; reassure them of your support",
            "Fairness – help them understand any decision, deadline or work assigned is reasonable"
          ]
        },
      ]
    } else {
      this.questions = [
        {question: 'What’s the purpose / objective of this meeting?', isText: true, answer: null,},
        {question: 'To what extent is every attendee clear about the purpose / objective?', isNumber: true, answer: null },
        {question: 'Who needs more clarity about why the meeting is being held, and what it’s expected to accomplish?', isText: true, answer: null },
        {question: 'To what extent is each person clear about his/her role and responsibility?',isNumber: true, answer: null},
        {question: 'Who needs more clarity about why they’re attending, and what they’re expected to contribute?', isText: true, answer: null},
        {question: 'What are the ground rules for this session?', isText: true, answer: null},
        {question: 'To what extent are the ground rules clear to everyone and fully accepted?', isNumber: true, answer: null},
        {question: 'Would you like to review/choose ground rules?', isYesNo: true, answer: null},
        {question: 'Your meeting’s pre-critique score is x.y. (average of the responses given above) This means your meeting is starting with a xy% chance of success.  (score converted to a %)', isText: true, answer: null},
      ]
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreparePage');
  }
  select(answer){
    this.questions[this.activeIndex].answer = answer;
    console.log(this.questions)
    setTimeout(()=> {
      if(this.appProvider.type === 'coach_myself'){
        this.prepareCoachMyself();
      } else if(this.appProvider.type === 'coach_someone') {
        this.prepareCoachSomeone();
      } else {
        this.prepareLeadMeeting();
      }
    },20)
   
  }
  selectChoice(choice){
    this.questions[this.activeIndex].choice = choice;
    console.log(this.questions)
    setTimeout(()=> {
      if(this.appProvider.type === 'coach_myself'){
        this.prepareCoachMyself();
      } else if(this.appProvider.type === 'coach_someone') {
        this.prepareCoachSomeone();
      } else {
        this.prepareLeadMeeting();
      }
    },300)
  }

  swipeEvent(e){
    console.log(e);
    if(e.offsetDirection === 4){
      this.navCtrl.pop()
    } 
    else if(e.offsetDirection === 2){
      if(this.appProvider.type === 'coach_myself'){
        this.prepareCoachMyself();
      } else if(this.appProvider.type === 'coach_someone') {
        this.prepareCoachSomeone();
      } else {
        this.prepareLeadMeeting();
      }
    } 
  }

  prepareCoachMyself(){
    if(this.activeIndex == 0){
      if(this.questions[this.activeIndex].answer <=5){
        this.activeIndex = 1;
      } else {
        this.activeIndex = 3;
      }
    } else if(this.activeIndex == 1) {
      if(this.questions[this.activeIndex].answer == 'yes'){
        this.activeIndex = 3;
      } else {
        this.activeIndex = 2;
      }
    } else if(this.activeIndex == 2) {
        this.activeIndex = 3;
    } else if(this.activeIndex == 3) {
      if(this.questions[this.activeIndex].answer <=5){
        this.activeIndex = 4;
      } else {
        this.activeIndex = 6;
      }
    } else if(this.activeIndex == 4){
      if(this.questions[this.activeIndex].answer == 'yes'){
        this.activeIndex = 6;
      } else {
        this.activeIndex = 5;
      }
    } else if(this.activeIndex == 5){
        this.activeIndex = 6;
    } else if(this.activeIndex == 6){
      this.navCtrl.push(TimingAgendaPage);
    }
  }
  prepareCoachSomeone(){
    if(this.activeIndex == 0){
      if(this.questions[this.activeIndex].answer <=5){
        this.activeIndex = 1;
      } else {
        this.activeIndex = 3;
      }
    } else if(this.activeIndex == 1) {
      if(this.questions[this.activeIndex].answer == 'yes'){
        this.activeIndex = 3;
      } else {
        this.activeIndex = 2;
      }
    } else if(this.activeIndex == 2) {
        this.activeIndex = 3;
    } else if(this.activeIndex == 3) {
      if(this.questions[this.activeIndex].answer <=5){
        this.activeIndex = 4;
      } else {
        this.activeIndex = 6;
      }
    } else if(this.activeIndex == 4){
      if(this.questions[this.activeIndex].answer == 'yes'){
        this.activeIndex = 6;
      } else {
        this.activeIndex = 5;
      }
    } else if(this.activeIndex == 5){
        this.activeIndex = 6;
    } else if(this.activeIndex > 5 && this.activeIndex < 9){
      this.activeIndex++;
    } else if(this.activeIndex == 9){
      this.navCtrl.push(TimingAgendaPage);
    }
  }
  prepareLeadMeeting(){
    if(this.activeIndex == 0){
     this.activeIndex = 1;
    } else if(this.activeIndex == 1){
      if(this.questions[this.activeIndex].answer <=7 ){
        this.activeIndex = 2;
      } else {
        this.activeIndex = 3;
      }
    } else if(this.activeIndex == 2){
      this.activeIndex = 3;
    } else if(this.activeIndex == 3){
      if(this.questions[this.activeIndex].answer <=7 ){
        this.activeIndex = 4;
      } else {
        this.activeIndex = 5;
      }
    } else if(this.activeIndex == 4){
      this.activeIndex = 5;
    } else if(this.activeIndex == 5){
      this.activeIndex = 6;
    } else if(this.activeIndex == 6){
      if(this.questions[this.activeIndex].answer <=7 ){
        this.activeIndex = 7;
      } else {
        this.activeIndex = 8;
      }
    }  else if(this.activeIndex == 7){
      if(this.questions[this.activeIndex].answer == 'yes'){
        //nothing for now
      } else {
        this.activeIndex = 8;
      }
    } else if(this.activeIndex == 8){
      this.navCtrl.push(TimingAgendaPage);
    }
    
  }
}
