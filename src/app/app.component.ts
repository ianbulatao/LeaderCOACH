import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pagesCoach: Array<{ title: string, component: any}>;
  pagesLeader: Array<{ title: string, component: any }>;
  pagesContact: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pagesCoach = [
      { title: 'Coach myself', component: WhatdoesPage },
      { title: 'Coach someone' , component: WhatdoesPage },
      { title: 'Lead a meeting', component: WhatdoesPage },
      { title: 'Set ground rules', component: WhatdoesPage }
  ];
    this.pagesLeader = [
      { title: 'What it does.', component: WhatdoesPage },
      { title: 'How it works.', component: HowWorksPage },
      { title: 'What coaching is/is not.', component: LeaderWhatCoachPage },
      { title: 'Why these colors?', component: LeaderWhyColorsPage },
      { title: 'Why is equal to ideal?', component: LeaderWhyEqualIdealPage }
    ];
    this.pagesContact = [
      { title: 'Share experience', component: ContactShareExperiencePage },
      { title: 'Give feedback', component: ContactGiveFeedbackPage },
      { title: 'Suggest modules', component: ContactSuggestPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page === "QuotesPage") { this.nav.setRoot(QuotesPage); }
    else { this.nav.setRoot(page.component); }
  }
}
