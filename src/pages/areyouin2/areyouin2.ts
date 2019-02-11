import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';



import { LoginPage } from '../login/page/page';
import { LikePage } from '../like/like';
import { MapPage } from '../map/map';
import { Page1 } from '../page1/page1';
import { AboutPage } from '../about/about';
import { SchedulePage } from '../schedule/schedule';
import { FormPage } from '../form/form';
@IonicPage()
@Component({
  selector: 'page-areyouin2',
  templateUrl: 'areyouin2.html',
})
export class Areyouin2Page {
responseData : any;
  userData = {"email": "","password": ""};
  constructor(public navCtrl: NavController, public navParams: NavParams,
   private nativePageTransitions: NativePageTransitions) {
   	 if(localStorage.getItem('userData')){
        this.navCtrl.setRoot(FormPage)
      }
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


openLikePage(){
    let options: NativeTransitionOptions = {
      iosdelay: 50,
      androiddelay: 50,
     };
    this.nativePageTransitions.fade(null); // flip/ slide/ fade(null) / curl /drawer
   this.navCtrl.setRoot(LikePage);
    }
 

openSchedulePage(){
    let options: NativeTransitionOptions = {
      iosdelay: 50,
      androiddelay: 50,
     };
    this.nativePageTransitions.fade(null); // flip/ slide/ fade(null) / curl /drawer
   this.navCtrl.setRoot(SchedulePage);
    }
  openAboutPage(){
    let options: NativeTransitionOptions = {
      iosdelay: 50,
      androiddelay: 50,
     };
    this.nativePageTransitions.fade(null); // flip/ slide/ fade(null) / curl /drawer
   this.navCtrl.setRoot(AboutPage);
    }
}
