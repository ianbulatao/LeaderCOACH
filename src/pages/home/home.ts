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
      this.events.publish('updateBack');
  }

  // swipeEvent(e){
  //   console.log(e);
  //   if(e.offsetDirection === 2){
  //     this.navCtrl.setRoot(SecondScreenPage, {}, {animate: true, direction: "forward"})
  //   }
  // }
  goTo(type, title) {
    this.navCtrl.push(SecondScreenPage, {type:type})
    this.appProvider.type = type;
    this.appProvider.title = title;
    this.events.publish('user:login');
  }
  gotoGroundRules(title) {
    this.appProvider.title = title;
    this.navCtrl.push(GroundRulesPage)
  }
  
}
