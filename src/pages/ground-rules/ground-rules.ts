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
  rules;
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
      this.rules = res;
      this.rules.participation_order.forEach(element => {
        const index = this.groundRule.participation_order.indexOf(element.text);
        if(index != -1){
          element.isChoose = true;
        }
      });
      this.rules.respect_inclusion.forEach(element => {
        const index = this.groundRule.respect_inclusion.indexOf(element.text);
        if(index != -1){
          element.isChoose = true;
        }
      });
      this.rules.curiosity_imagination.forEach(element => {
        const index = this.groundRule.curiosity_imagination.indexOf(element.text);
        if(index != -1){
          element.isChoose = true;
        }
      });
      this.rules.challenge_critique.forEach(element => {
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
      this.navCtrl.pop()
    } 
    else if(e.offsetDirection === 2){
      this.navCtrl.pop()
    }
  }
  addrules(){
    this.rules.push(this.rule)
  }
  onChange(isChoose,rule,phase){
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
}
