import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { LoginPage } from '../login/page/page';
import { MapPage } from '../map/map';
import { Page1 } from '../page1/page1';
import { SchedulePage } from '../schedule/schedule';


@Component({
  selector: 'page-like',
  templateUrl: 'like.html'
})
export class LikePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

    openMapPage(){
      this.navCtrl.push(MapPage);
    }
 
    openLoginPage(){
      this.navCtrl.push(LoginPage);
    }
    openHomePage(){
      this.navCtrl.push(Page1);
    }
    openSchedulePage(){
      this.navCtrl.push(SchedulePage);
    }

}
