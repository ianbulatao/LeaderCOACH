import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';

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
  activeIndex = 0;
  defaultWidthSection;
  // participation_order = 0;
  // curiosity_imagination = 0;
  // respect_inclusion = 0;
  // challenge_critique = 0;
  groundRule = {
    participation_order: [],
    curiosity_imagination: [],
    respect_inclusion: [],
    challenge_critique: []
  }

  rule;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appProvider: AppProvider,
    public toast: ToastController
    ) {
    if(localStorage.getItem('groundRules')){
      this.groundRule = JSON.parse(localStorage.getItem('groundRules'));
    }
    this.appProvider.getGroundRules().subscribe(res => {
      console.log(res)
      this.rules = res.data;
      this.defaultWidthSection = 50/(this.rules.length - 1);
      this.rules[0].rules.forEach(element => {
        const index = this.groundRule.participation_order.indexOf(element.text);
        if(index != -1){
          element.isChoose = true;
        }
      });
      this.rules[1].rules.forEach(element => {
        const index = this.groundRule.respect_inclusion.indexOf(element.text);
        if(index != -1){
          element.isChoose = true;
        }
      });
      this.rules[2].rules.forEach(element => {
        const index = this.groundRule.curiosity_imagination.indexOf(element.text);
        if(index != -1){
          element.isChoose = true;
        }
      });
      this.rules[3].rules.forEach(element => {
        const index = this.groundRule.challenge_critique.indexOf(element.text);
        if(index != -1){
          element.isChoose = true;
        }
      });
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroundRulesPage');
  }
  swipeEvent(e){
    console.log(e);
    if(e.offsetDirection === 4){
      this.prevSection();
    } 
    else if(e.offsetDirection === 2){
      this.nextSection();
    }
  }
  addrules(){
    this.rules.push(this.rule)
  }
  onChange(isChoose,rule){
    const phase = this.activeIndex == 0 ? 'participation_order' : this.activeIndex == 1 ? 'curiosity_imagination' :  this.activeIndex == 2 ? 'respect_inclusion' : 'challenge_critique'
    console.log(isChoose);
    console.log(this.rules)
    if(isChoose){
      // this[phase]++;
      this.groundRule[phase].push(rule);
    } else {
      // this[phase]--;
      const index = this.groundRule[phase].indexOf(rule);
      if (index !== -1) {
        this.groundRule[phase].splice(index, 1);
      }
    }
    console.log(this[phase],this.groundRule)
  }
  save(){
    const toast = this.toast.create({
      duration: 2000,
      message: 'Groud rules save successfully'
    })
    const groundRules = JSON.stringify(this.groundRule);
    localStorage.setItem('groundRules', groundRules);
    toast.present();
    this.navCtrl.pop();
  }
  nextSection(){
    if( (this.rules.length-1) != this.activeIndex ){
      this.activeIndex++;
      // this.slideIndex = 0;
      // this.phaseStatementTimer = 0;
      // this.slides.lockSwipes(false);
      // this.slides.slideTo(this.slideIndex, 500);
    }
  }
  prevSection(){
    if(this.activeIndex != 0){
      this.activeIndex--;
      // this.slideIndex = 0;
      // this.phaseStatementTimer = 0;
      // this.slides.lockSwipes(false);
      // this.slides.slideTo(this.slideIndex, 500);
    }
  }
}
