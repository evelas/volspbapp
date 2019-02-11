import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


import { LoginPage } from '../login/page/page';
import { MapPage } from '../map/map';
import { Page1 } from '../page1/page1';
import { SchedulePage } from '../schedule/schedule';
import { AreyouinPage } from '../areyouin/areyouin';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
   private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

openHomePage(){

    let options: NativeTransitionOptions = {
      iosdelay: 50,
      androiddelay: 50,
     };
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(Page1);
    }

openLoginPage() {

    let options: NativeTransitionOptions = {
      iosdelay: 50,
      androiddelay: 50,
     };
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(LoginPage);
    }


openMapPage(){
    let options: NativeTransitionOptions = {
      iosdelay: 50,
      androiddelay: 50,
     };
    this.nativePageTransitions.fade(null); // flip/ slide/ fade(null) / curl /drawer
   this.navCtrl.setRoot(MapPage);
    }

 

openSchedulePage(){
    let options: NativeTransitionOptions = {
      iosdelay: 50,
      androiddelay: 50,
     };
    this.nativePageTransitions.fade(null); // flip/ slide/ fade(null) / curl /drawer
   this.navCtrl.setRoot(SchedulePage);
    }
openAreyouinPage(){
    let options: NativeTransitionOptions = {
      iosdelay: 50,
      androiddelay: 50,
     };
    this.nativePageTransitions.fade(null); // flip/ slide/ fade(null) / curl /drawer
   this.navCtrl.setRoot(AreyouinPage);
    }
}
