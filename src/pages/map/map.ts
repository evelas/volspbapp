import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


 // Bottom menu
import { LoginPage } from '../login/page/page';
import { LikePage } from '../like/like';
import { SchedulePage } from '../schedule/schedule';
import { Page1 } from '../page1/page1';
import { AreyouinPage } from '../areyouin/areyouin';

import { Geolocation } from '@ionic-native/geolocation';
import leaflet from 'leaflet';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
 @ViewChild('map') mapContainer: ElementRef;
  map: any;
  private latLng: any;
  private marker: any;
  someFeatures: any;
  constructor(public navCtrl: NavController,
   public navParams: NavParams, private nativePageTransitions: NativePageTransitions,
    private geo: Geolocation, private platform: Platform) {

  }


 ionViewDidLoad() {
    this.loadMap();
    setTimeout(() => {
       this.map.invalidateSize(0);
    }, 800);
  }

  onMapClicked(event) {
    this.latLng = event.latlng;
  }

  onMarkerPositionChanged(e) {
    const latlng = e.target.getLatLng();

    this.latLng = latlng;
  }

  loadMap() {

    this.map = leaflet
      .map("map")
      .setView([59.9134, 30.4150], 9)
      .on("click", this.onMapClicked.bind(this))

    leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
       
    }).addTo(this.map);
  // var someFeatures;
 
leaflet.geoJSON(someFeatures, {
    onEachFeature: function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}
}).addTo(this.map);

// leaflet.marker([59.9828807, 30.1992909]).addTo(this.map) 
// .bindPopup('<span style="font-size:16px;">Фестиваль Вконтакте</span> <br><span style="color:grey; font-size:16px;"> станция метро Беговая</span> ') 
// .openPopup(); 

// leaflet.marker([59.8669435, 30.332628]).addTo(this.map) 
// .bindPopup('GeekPicnic') 
// .openPopup(); 

// leaflet.marker([59.9247469, 30.2213701]).addTo(this.map) 
// .bindPopup('Big Fest') 
// .openPopup(); 

 leaflet.control.locate({
       locateOptions: {
               maxZoom: 15
}
}).addTo(this.map);
 


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
    this.nativePageTransitions.fade(null);// flip/ slide/ fade(null) / curl /drawer
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
    openAreyouinPage(){
    let options: NativeTransitionOptions = {
      iosdelay: 50,
      androiddelay: 50,
     };
    this.nativePageTransitions.fade(null); // flip/ slide/ fade(null) / curl /drawer
   this.navCtrl.setRoot(AreyouinPage);
    }
}
