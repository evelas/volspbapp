import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

 
import { Page1 } from '../pages/page1/page1';
import { LoginPage } from '../pages/login/page/page';
import { RegPage } from '../pages/reg/reg';
import { AboutPage } from '../pages/about/about';
 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;
  secondpages: Array<{title: string, component: any}>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      { title: 'Как получить баллы?', component: AboutPage },
      { title: 'Зарегистрироваться!', component: RegPage }
 
    ];
    this.secondpages = [
 
      { title: 'О приложении', component: AboutPage } 
    ];    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


  }
    openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }z
}

