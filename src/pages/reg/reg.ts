import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { ProfilePage } from '../profile/profile';



import { LoginPage } from '../login/page/page';
import { LikePage } from '../like/like';
import { MapPage } from '../map/map';
import { Page1 } from '../page1/page1';
import { SchedulePage } from '../schedule/schedule';
import { AboutPage } from '../about/about';
import { AreyouinPage } from '../areyouin/areyouin';
@Component({
  selector: 'page-reg',
  templateUrl: 'reg.html'
})
export class RegPage {
public admins: any;
 responseData : any;
  userData = {"gender": "","lastname": "","password": "", "name": "","email": "", "admin": "","score": ""};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:AuthService, 
    public toastCtrl:ToastController, private nativePageTransitions: NativePageTransitions) {}

  login(){
  	this.navCtrl.push(LoginPage);
  }
  signup(){

    if(this.userData.email 
      && this.userData.password 
      && this.userData.lastname 
      && this.userData.name 
      && this.userData.gender
      && this.userData.admin 
      && this.userData.score
      ){

      this.authService.postData(this.userData,'signup').then((result) => {
      this.responseData = result;
      if(this.responseData.userData){
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(ProfilePage);
      // if($password_check = preg_match('~^[A-Za-z0-9!@#$%^&*()_]{6,20}$~i', $password);){

      // }else{}

      }
      else{ this.presentToast("Такой email уже существует или пароль меньше 6 символов");

setTimeout(()=> this.backToReg(), 2000);
       }
    }, (err) => {
      // Error log
    });
    }
else {
  this.presentToast("Вы забыли что-то");
}
  	
  }
backToReg(){
  this.navCtrl.push(RegPage);
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
