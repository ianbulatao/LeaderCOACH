import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { TimingAgendaPage } from '../timing-agenda/timing-agenda';
import { MainScreenPage } from '../main-screen/main-screen';

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
      if(this.navParams.get('isStartNow')){
        this.activeIndex = 7;
      }
      this.questions = [
        {question: 'What’s your energy level?', isNumber: true, answer: null, type: 'energyLevel'},
        {question: 'Is this the best time?', isYesNo: true, answer: null, type: 'bestEnergyLevel'},
        {question: 'When might your energy be higher?', isText: true, answer: null, type: 'whenEnergyLevel'},
        {question: 'Have you minimized distractions?',isNumber: true, answer: null, type: 'distractions'},
        {question: 'Is this the best time?', isYesNo: true, answer: null},
        {question: 'What would help you focus more?', isText: true, answer: null},
        {question: 'What’s your objective in the time allotted for this session?', isText: true, answer: null},
        {question: 'SWIPE LEFT to move to the next question. Use <strong>&raquo;</strong> to move to the next section (color) once the current section has been sufficiently explored. Use <strong>&laquo;</strong> to go back to the previous section.'},
        {question: 'Engage the person with your questions. Ask in your own words. Allow time for thought, reflection. Be comfortable with silence. Encourage them to elaborate, give examples, and share anecdotes. Use phrases like “Tell me more…”, “For instance?”, “Help me understand…”. Remember: your goal is not to provide answers, but to help them find their answer; not to impose a solution, but help them find their best solution.'},
      ]
    } else if(this.appProvider.type === 'coach_an_employee') {
      if(this.navParams.get('isStartNow')){
        this.activeIndex = 10;
      }
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
        {question: 'SWIPE LEFT to move to the next question. Use <strong>&raquo;</strong> to move to the next section (color) once the current section has been sufficiently explored. Use <strong>&laquo;</strong> to go back to the previous section.'},
        {question: `Engage the person with your questions. Ask in your own words. 
        Allow time for thought, reflection. Be comfortable with silence. 
        Encourage them to elaborate, give examples, and share anecdotes. 
        Use phrases like “Tell me more…”, “For instance?”, “Help me understand…”. Remember: your goal is not to provide answers, but to help them find their answer; not to impose a solution, but help them find their best solution.
        `},

      ]
    } else {
      if(this.navParams.get('isStartNow')){
        this.activeIndex = 9;
      }
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
        {question: 'SWIPE LEFT to move to the next question. Use <strong>&raquo;</strong> to move to the next section (color) once the current section has been sufficiently explored. Use <strong>&laquo;</strong> to go back to the previous section.'},
        {question: `The questions which follow are intended to prompt discussion. Other related questions for that section are welcome. However, as the leader, be on guard for questions that may be better asked in a later section. The point is to fully explore each section (color) then move to the next one. Consider using a speech-to-text voice recorder or assigning note-taking responsibility to capture decisions and follow-up actions.`},
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
      } else if(this.appProvider.type === 'coach_an_employee') {
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
      } else if(this.appProvider.type === 'coach_an_employee') {
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
      } else if(this.appProvider.type === 'coach_an_employee') {
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
      this.activeIndex = 7;
    } else if(this.activeIndex == 7){
      this.activeIndex = 8;
    } else if(this.activeIndex == 8){
      if(this.navParams.get('isStartNow')){
        this.navCtrl.push(MainScreenPage);
      } else {
        this.navCtrl.push(TimingAgendaPage);
      }
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
    } else if(this.activeIndex > 5 && this.activeIndex < 11){
      this.activeIndex++;
    } 
    else if(this.activeIndex == 11){
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
      this.activeIndex = 9;
    } else if(this.activeIndex == 9){
      this.activeIndex = 10;
    } else if(this.activeIndex == 10){
      if(this.navParams.get('isStartNow')){
        this.navCtrl.push(MainScreenPage);
      } else {
        this.navCtrl.push(TimingAgendaPage);
      }
    }
    
  }
}
