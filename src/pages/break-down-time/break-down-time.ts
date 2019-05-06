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
  isPredicted = false;
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
    legend: 'none',
    titlePosition: 'none',
    chartArea:{left:10,top:0,right:10,width:"100%",height:"100%"},
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
      chartArea:{left:10,top:0,right:10,width:"100%",height:"100%"},
      colors:[],
    // 'title': 'Ideal',
    titlePosition: 'none',
    legend: 'none',

    // 'width': 150,
    // 'height': 150
    }
  };
  predicted = {
    chartType: 'PieChart',
    dataTable: [
    ],
    options: {
      chartArea:{left:10,top:0,right:10,width:"100%",height:"100%"},
      colors:['#33a457','yellow','#33348e', '#cc2229'],
    // 'title': 'Ideal',
    titlePosition: 'none',
    legend: 'none',

    // 'width': 150,
    // 'height': 150
    }
  };

  mbti = [
    {code: "ISTJ", sensing: 47, intution:7, thinking:30, feeling:16 },
    {code: "ISFJ", sensing: 47, intution:7, thinking:16, feeling:30 },
    {code: "INFJ", sensing: 7, intution:47, thinking:16, feeling:30 },
    {code: "INTJ", sensing: 7, intution:47, thinking:30, feeling:16 },
    {code: "ISTP", sensing: 30, intution:16, thinking:47, feeling:7 },
    {code: "ISFP", sensing: 30, intution:16, thinking:7, feeling:47 },
    {code: "INFP", sensing: 16, intution:30, thinking:7, feeling:47 },
    {code: "INTP", sensing: 16, intution:30, thinking:47, feeling:7 },
    {code: "ESTP", sensing: 47, intution:7, thinking:30, feeling:16 },
    {code: "ESFP", sensing: 47, intution:7, thinking:16, feeling:30 },
    {code: "ENFP", sensing: 7, intution:47, thinking:16, feeling:30 },
    {code: "ENTP", sensing: 7, intution:47, thinking:30, feeling:16 },
    {code: "ESTJ", sensing: 30, intution:16, thinking:47, feeling:7 },
    {code: "ESFJ", sensing: 30, intution:16, thinking:7, feeling:47 },
    {code: "ENFJ", sensing: 16, intution:30, thinking:7, feeling:47 },
    {code: "ENTJ", sensing: 16, intution:30, thinking:47, feeling:7 },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sections = this.navParams.get('sections');
    this.sections.forEach(element => {
      this.ideal.dataTable.push([element.title, {v: element.percent, f: element.percent}]);
      this.ideal.options.colors.push(element.color);
    });
    console.log(this.sections);
    const index = this.mbti.findIndex(element => element.code === this.navParams.get('personalType'));
    if(index > -1){
      this.isPredicted = true;
      this.predicted.dataTable = [
        ['Languages', 'Percent'],
        ['Sensing', this.mbti[index].sensing],
        ['Intution', this.mbti[index].intution],
        ['Thinking', this.mbti[index].thinking],
        ['Feeling', this.mbti[index].feeling],
      ];
    }
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreakDownTimePage');
  }

}
