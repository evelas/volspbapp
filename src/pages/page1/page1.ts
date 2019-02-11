import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import { ModalController } from 'ionic-angular';

 

import { LoginPage } from '../login/page/page';
import { MapPage } from '../map/map';
import { LikePage } from '../like/like';
import { SchedulePage } from '../schedule/schedule';
import { AboutPage } from '../about/about';
import { FormPage } from '../form/form';
import { AreyouinPage } from '../areyouin/areyouin';
import { Areyouin2Page } from '../areyouin2/areyouin2';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})
export class Page1 {
public isSearchbarOpened = false;
    constructor(public navCtrl: NavController,
     public loadingCtrl:LoadingController,
      public navParams: NavParams,
<<<<<<< Updated upstream
       private nativePageTransitions: NativePageTransitions) {
=======
       private nativePageTransitions: NativePageTransitions,
       public http: HttpClient,
       private modal: ModalController
       ) {
>>>>>>> Stashed changes

     

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
openAreyouin2Page(){
    let options: NativeTransitionOptions = {
      iosdelay: 50,
      androiddelay: 50,
     };
    this.nativePageTransitions.fade(null); // flip/ slide/ fade(null) / curl /drawer
   this.navCtrl.setRoot(Areyouin2Page);
    }

    
    // onLink(url: string) {
    //     window.open(url);
    // }
}
