import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BreakDownTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-break-down-time',
  templateUrl: 'break-down-time.html',
})
export class BreakDownTimePage {
  actual = {
    chartType: 'PieChart',
    dataTable: [
      ['Languages', 'Percent'],
      ['Ionic',     33],
      ['Angular',      33],
      ['JavaScript',  33]
    ],
    options: {
    'title': 'Actual',
    'legend': 'none',
    // 'width': 150,
    // 'height': 150
    }
  };
  ideal = {
    chartType: 'PieChart',
    dataTable: [
      ['Languages', 'Percent'],
      ['Ionic',     33],
      ['Angular',      33],
      ['JavaScript',  33]
    ],
    options: {
    'title': 'Ideal',
    'legend': 'none',

    // 'width': 150,
    // 'height': 150
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreakDownTimePage');
  }

}
