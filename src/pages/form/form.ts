import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
 

import { LoginPage } from '../login/page/page';
import { MapPage } from '../map/map';
import { LikePage } from '../like/like';
import { SchedulePage } from '../schedule/schedule';
import { AboutPage } from '../about/about';
import { AreyouinPage } from '../areyouin/areyouin';
import { Page1 } from '../page1/page1';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public loadingCtrl:LoadingController,
       private nativePageTransitions: NativePageTransitions) {
  }

 
     
openLoginPage() {
		let loader = this.loadingCtrl.create({
			spinner: "bubbles",
			content: "Wait a minute",
			duration: 1000
});
		loader.present();

    let options: NativeTransitionOptions = {
   
  
      iosdelay: 50,
      androiddelay: 50
 
   };
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(LoginPage);
  	}

openHomePage(){

    let options: NativeTransitionOptions = {
      iosdelay: 50,
      androiddelay: 50,
     };
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot(Page1);
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
  openFormPage(){
    let options: NativeTransitionOptions = {
      iosdelay: 50,
      androiddelay: 50,
     };
    this.nativePageTransitions.fade(null); // flip/ slide/ fade(null) / curl /drawer
   this.navCtrl.setRoot(FormPage);
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
