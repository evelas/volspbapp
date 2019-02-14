import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page1 } from '../page1/page1';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})

export class IntroPage {
	category: any;
	data: any = {};
@ViewChild('slides') slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  }

ionViewDidLoad() {
		this.data = this.navParams.get('data');
		this.category = (this.navParams.get('category'));
	}
  nextSlide() {
    this.slides.slideNext();
  }
	goBack(){
		this.navCtrl.pop();
	}
  prevSlide() {
    this.slides.slidePrev();
  }
navHome() {
    this.navCtrl.setRoot(Page1);
  }


}
