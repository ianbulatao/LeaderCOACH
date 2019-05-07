import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppProvider } from '../providers/app/app';

import { HomePage } from '../pages/home/home';
import { WhatdoesPage } from '../pages/whatdoes/whatdoes';
import { HowWorksPage } from '../pages/how-works/how-works';
import { LeaderWhatCoachPage } from '../pages/leader-what-coach/leader-what-coach';
import { LeaderWhyColorsPage } from '../pages/leader-why-colors/leader-why-colors';
import { LeaderWhyEqualIdealPage } from '../pages/leader-why-equal-ideal/leader-why-equal-ideal';
import { ContactGiveFeedbackPage } from '../pages/contact-give-feedback/contact-give-feedback';
import { ContactShareExperiencePage } from '../pages/contact-share-experience/contact-share-experience';
import { ContactSuggestPage } from '../pages/contact-suggest/contact-suggest';
import { QuotesPage } from '../pages/quotes/quotes';
import { SecondScreenPage } from '../pages/second-screen/second-screen';
import { GroundRulesPage } from '../pages/ground-rules/ground-rules';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pagesCoach: Array<{ title: string, component: any, type: string}>;
  pagesLeader: Array<{ title: string, component: any }>;
  pagesContact: Array<{ title: string, component: any }>;
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public appProvider: AppProvider
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pagesCoach = [
      { title: 'Coach yourself', component: SecondScreenPage, type: 'coach_myself' },
      { title: 'Coach someone', component: SecondScreenPage, type: 'coach_an_employee' },
      { title: 'Lead a meeting', component: SecondScreenPage, type: 'lead_a_meeting' },
      { title: 'Set ground rules', component: GroundRulesPage, type: null }
  ];
    this.pagesLeader = [
      { title: 'What it does.', component: WhatdoesPage },
      { title: 'How it works.', component: HowWorksPage },
      { title: 'What coaching is/is not.', component: LeaderWhatCoachPage },
      { title: 'Why these colors.', component: LeaderWhyColorsPage },
      { title: 'Why is equal ideal.', component: LeaderWhyEqualIdealPage }
    ];
    this.pagesContact = [
      { title: 'Share experience', component: ContactShareExperiencePage },
      { title: 'Give feedback', component: ContactGiveFeedbackPage },
      { title: 'Suggest modules', component: ContactSuggestPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page, type) {
    if (page === "QuotesPage") { this.nav.setRoot(QuotesPage); }
    else {
      this.nav.setRoot(page.component, { type: type });
      this.appProvider.type = type;
    }
  }
  updateTimer(e) {
    if (e.checked) {
      this.appProvider.timerStat = true;
    }
    else {
      this.appProvider.timerStat = false;
    }
  }
  updateQuestion(e) {
    if (e.checked) {
      this.appProvider.isSlide = true;
    }
    else {
      this.appProvider.isSlide = false;
    }
  }
}
