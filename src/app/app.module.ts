import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SecondScreenPageModule } from '../pages/second-screen/second-screen.module';
import { AppProvider } from '../providers/app/app';
import { HttpClientModule } from '@angular/common/http';
import { TimeInputPageModule } from '../pages/time-input/time-input.module';
import { PrepareInputPage } from '../pages/prepare-input/prepare-input';
import { PrepareInputPageModule } from '../pages/prepare-input/prepare-input.module';
import { MainScreenPageModule } from '../pages/main-screen/main-screen.module';
import { PreparePageModule } from '../pages/prepare/prepare.module';
import { TimingAgendaPageModule } from '../pages/timing-agenda/timing-agenda.module';
import { GroundRulesPageModule } from '../pages/ground-rules/ground-rules.module';
import { PostCritiquePageModule } from '../pages/post-critique/post-critique.module';
import { WhatdoesPageModule } from '../pages/whatdoes/whatdoes.module';
import { HowWorksPageModule } from '../pages/how-works/how-works.module';
import { LeaderWhatCoachPageModule } from '../pages/leader-what-coach/leader-what-coach.module';
import { LeaderWhyColorsPageModule } from '../pages/leader-why-colors/leader-why-colors.module';
import { LeaderWhyEqualIdealPageModule } from '../pages/leader-why-equal-ideal/leader-why-equal-ideal.module';
import { ContactGiveFeedbackPageModule } from '../pages/contact-give-feedback/contact-give-feedback.module';
import { ContactShareExperiencePageModule } from '../pages/contact-share-experience/contact-share-experience.module';
import { ContactSuggestPageModule } from '../pages/contact-suggest/contact-suggest.module';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { BreakDownTimePage } from '../pages/break-down-time/break-down-time';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BreakDownTimePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    Ng2GoogleChartsModule,
    SecondScreenPageModule,
    TimeInputPageModule,
    PrepareInputPageModule,
    MainScreenPageModule,
    PreparePageModule,
    TimingAgendaPageModule,
    GroundRulesPageModule,
    PostCritiquePageModule,
    WhatdoesPageModule,
    HowWorksPageModule,
    LeaderWhatCoachPageModule,
    LeaderWhyColorsPageModule,
    LeaderWhyEqualIdealPageModule,
    ContactGiveFeedbackPageModule,
    ContactShareExperiencePageModule,
    ContactSuggestPageModule
    // BreakDownTimePageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BreakDownTimePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppProvider
  ]
})
export class AppModule {}
