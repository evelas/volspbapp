import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../../providers/auth-service/auth-service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

 // Profile
import { RegPage } from '../../reg/reg';
import { ProfilePage } from '../../profile/profile';
 

 // Bottom menu
import { MapPage } from '../../map/map';
import { LikePage } from '../../like/like';
import { SchedulePage } from '../../schedule/schedule';
import { Page1 } from '../../page1/page1';
import { AboutPage } from '../../about/about';
import { AreyouinPage } from '../../areyouin/areyouin'; 


@Component({
    selector: 'page-page',
    templateUrl: 'page.html'
})
export class LoginPage {

 responseData : any;
  userData = {"email": "","password": ""};

 

    constructor(public navCtrl: NavController, public navParams: NavParams,
     public authService:AuthService, public toastCtrl:ToastController,
      private nativePageTransitions: NativePageTransitions) { 

     if(localStorage.getItem('userData')){
        this.navCtrl.setRoot(ProfilePage)
      }
    }
 


   register() {
      this.navCtrl.push(RegPage);
  	}
 









  	profile() {
  	 
if(this.userData.email && this.userData.password){

   this.authService.postData(this.userData,'login').then((result) => {
      this.responseData = result;
      if(this.responseData.userData){
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
       let options: NativeTransitionOptions = {
   
  direction: "up",
  duration: 1000,
  slowdownfactor: 2,
      iosdelay: 50,
      androiddelay: 100,
      fixedPixelsTop: 0,
    fixedPixelsBottom: 30
   
     };

   this.nativePageTransitions.curl(options); // flip/ slide/ fade(null) / curl /drawer
   this.navCtrl.setRoot(ProfilePage);
      }
      else{ 
        this. presentToast("Не верный логин или пароль");
       }
    }, (err) => {
      // Error log
    });
} else  {
this. presentToast("Не верный логин или пароль");
} 

     
  	}

    presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000
    });
    toast.present();
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
    openAreyouinPage(){
    let options: NativeTransitionOptions = {
      iosdelay: 50,
      androiddelay: 50,
     };
    this.nativePageTransitions.fade(null); // flip/ slide/ fade(null) / curl /drawer
   this.navCtrl.setRoot(AreyouinPage);
    }

}
