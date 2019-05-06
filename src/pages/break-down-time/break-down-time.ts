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
  sections = [];
  actual = {
    chartType: 'PieChart',
    dataTable: [
      ['Languages', 'Percent'],
      ['Test',     33],
      ['Test',      33],
      ['Test',  33]
    ],
    options: {
    // 'title': 'Actual',
    'legend': 'none',
    titlePosition: 'none',
    chartArea:{left:0,top:0,width:"100%",height:"100%"},
    // colors: [],
    // 'width': 150,
    // 'height': 150
    }
  };
  ideal = {
    chartType: 'PieChart',
    dataTable: [
      ['Languages', 'Percent'],
    ],
    options: {
      chartArea:{left:0,top:0,width:"100%",height:"100%"},
      colors:[],
    // 'title': 'Ideal',
    titlePosition: 'none',
    'legend': 'none',

    // 'width': 150,
    // 'height': 150
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sections = this.navParams.get('sections');
    this.sections.forEach(element => {
      this.ideal.dataTable.push([element.title, {v: element.percent, f: element.percent}]);
      this.ideal.options.colors.push(element.color);
    });
    console.log(this.sections);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreakDownTimePage');
  }

}
