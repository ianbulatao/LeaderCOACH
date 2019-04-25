import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SecondScreenPageModule,
    TimeInputPageModule,
    PrepareInputPageModule,
    MainScreenPageModule,
    PreparePageModule,
    TimingAgendaPageModule,
    GroundRulesPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppProvider
  ]
})
export class AppModule {}
