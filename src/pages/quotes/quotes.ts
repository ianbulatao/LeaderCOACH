import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { HomePage } from '../home/home';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quotes: Array<any> = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appProvider: AppProvider
  ) {
    this.appProvider.getAllQuotes().subscribe(res => {
      console.log(res)
      this.quotes = res.quotes;
    })
  }
  gotoBoot() {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

}
