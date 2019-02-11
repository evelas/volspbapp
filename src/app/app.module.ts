import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';


import { Page1 } from '../pages/page1/page1';
 // Bottom menu
import { LoginPage } from '../pages/login/page/page';
import { MapPage } from '../pages/map/map';
import { LikePage } from '../pages/like/like';
import { SchedulePage } from '../pages/schedule/schedule';

 // Profile
import { RegPage } from '../pages/reg/reg';
import { ProfilePage } from '../pages/profile/profile';
import { AdminPage } from '../pages/admin/admin';
//Another Pages
import { AboutPage } from '../pages/about/about';
import { FormPage } from '../pages/form/form';
import { AreyouinPage } from '../pages/areyouin/areyouin';
import { Areyouin2Page } from '../pages/areyouin2/areyouin2';


import { LinkyModule } from 'angular-linky';
import { AuthService } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';

import { NativePageTransitions } from '@ionic-native/native-page-transitions';

// camera

import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';


//search
import { SelectSearchableModule } from 'ionic-select-searchable';
 

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    AboutPage,
    FormPage,
    LoginPage,
    SchedulePage,
    LikePage,
    MapPage,
    AreyouinPage,
    Areyouin2Page,
    RegPage,
    ProfilePage,
    AdminPage
  ],
  imports: [
    BrowserModule, NgxQRCodeModule, HttpClientModule,
    IonicModule.forRoot(MyApp), HttpModule, LinkyModule, SelectSearchableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    AboutPage,
    FormPage,
    LoginPage,
    SchedulePage,
    LikePage,
    MapPage,
    AreyouinPage,
    Areyouin2Page,
    RegPage,
    ProfilePage,
    AdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},Geolocation,
    AuthService,
    NativePageTransitions,
    FileTransfer,
    File,
    Camera,
    FilePath,
    BarcodeScanner
  ]
})
export class AppModule {}
