import { Component } from '@angular/core';
import { NavController, App, Events } from 'ionic-angular';
import { SecondScreenPage } from '../second-screen/second-screen';
import { AppProvider } from '../../providers/app/app';
import { GroundRulesPage } from '../ground-rules/ground-rules';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public app: App,
    public appProvider: AppProvider,
    public events: Events
    ) {
    this.events.publish('userz:login');
  }

  // swipeEvent(e){
  //   console.log(e);
  //   if(e.offsetDirection === 2){
  //     this.navCtrl.setRoot(SecondScreenPage, {}, {animate: true, direction: "forward"})
  //   }
  // }
  goTo(type) {
    this.navCtrl.push(SecondScreenPage, {type:type})
    this.appProvider.type = type;
    this.events.publish('user:login');
  }
  gotoGroundRules() {
    this.navCtrl.push(GroundRulesPage)
  }

}
