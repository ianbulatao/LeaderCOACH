import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {
  type: string = '';
  questionType: string = '';
  minutes: number = 0;
  personalType = '';

 TimeConsumedInSeconds;
  constructor(public http: HttpClient) {
    console.log('Hello AppProvider Provider');
  }
  getAllList() { return this.http.get<any>('assets/json/list.json'); }
  getQuestion() { return this.http.get<any>(`assets/json/${this.type}/${this.questionType.trim().toLowerCase().replace(/ /g, '_')}.json`); }
  getGroundRules() { return this.http.get<any>('assets/json/ground_rules.json'); }
  getAllQuotes() { return this.http.get<any>('assets/json/quotes.json'); }
}
