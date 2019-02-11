import { Component } from '@angular/core';
import { NavController, NavParams, App, LoadingController, AlertController } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { LoginPage } from '../login/page/page';
import { LikePage } from '../like/like';
import { MapPage } from '../map/map';
import { Page1 } from '../page1/page1';
import { SchedulePage } from '../schedule/schedule';
import { AdminPage } from '../admin/admin';
import { Platform } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { FilePath } from '@ionic-native/file-path';
import { Camera, CameraOptions } from '@ionic-native/camera'; 
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AboutPage } from '../about/about';
import { AreyouinPage } from '../areyouin/areyouin';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
 
qrData = null;
createdCode = null;
scannedCode = null;


  public userDetails : any;
  public responseData : any;
  public dataSet : any;
  userPostData = {"user_id": "","token": ""};
  tabs: string = "profile";


userData = { user_id: "", token: "", imageB64: ""};

myphoto:any;
public photos : any;
base64Image:string;
fileImage:string;
public response: any;
public images: any;

public isImgOpened = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public app: App, public authService:AuthService, 
    private nativePageTransitions: NativePageTransitions, 
    private loadingCtrl: LoadingController, private transfer: FileTransfer,
    private camera: Camera,
    private file: File, private filePath: FilePath, platform: Platform,
    public http: Http, private alertCtrl : AlertController,
    private barcodeScanner: BarcodeScanner) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.getFeed();

this.getImages();

  

      if(this.userDetails.admin == "admin"){
        this.navCtrl.setRoot(AdminPage)
      }
      // создать пустое поле admin при регистрации, а после через бд вставлять права 
  }

createCode(){
  this.createdCode = this.qrData;
}
scanCode(){
  this.barcodeScanner.scan().then(barcodeData => {
    this.scannedCode = barcodeData.text;
  })
}

ngOnInit() {
    this.photos = [];
  }

 








cropImage(){
   const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.DATA_URL,
  
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    saveToPhotoAlbum: false,
    allowEdit: true,
    targetWidth: 200,
    targetHeight: 200,
}
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
         this.myphoto = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
       // Handle error
    });
}
takePhoto() {
const options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 600,
    targetHeight: 600,
    saveToPhotoAlbum: false
};

this.camera.getPicture(options).then(
    imageData => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.photos.push(this.base64Image);
      this.photos.reverse();
      this.sendData(imageData);
   },
   err => {
     console.log(err);
   }
);
}
cropPhoto() {
const options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    saveToPhotoAlbum: false,
    allowEdit: true,
    targetWidth: 200,
    targetHeight: 200,
};

this.camera.getPicture(options).then(
    imageData => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.photos.push(this.base64Image);
      this.photos.reverse();
      this.sendData(imageData);
   },
   err => {
     console.log(err);
   }
);
}
sendData(imageData) {
    
    this.userData.user_id = this.userDetails.user_id;
    this.userData.token = this.userDetails.token;
     
this.userData.imageB64 = imageData;

    this.authService.postData(this.userData, "userImage").then(
    result => {
      this.responseData = result;
    },
    err => {
    // Error log
  }
);
}
getImages(){
    this.userData.user_id = "4";
    this.userData.token = "222";
    this.authService.postData(this.userData, "getImages").then(
    result => {
       this.response = result;
       this.images = this.response.imageData
       console.log(this.images.imageData);
     },
     err => {
       console.log("error");
   }
);
}




deletePhoto(index) {
    let confirm = this.alertCtrl.create({
        title: 'Sure you want to delete this photo? There is NO undo!',
        message: '',
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('Disagree clicked');
            }
          }, {
            text: 'Yes',
            handler: () => {
              console.log('Agree clicked');
              this.photos.splice(index, 1);
            }
          }
        ]
      });
    confirm.present();
  }

getImage(){
const options: CameraOptions = {
  quality: 70,
  destinationType: this.camera.DestinationType.DATA_URL,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  saveToPhotoAlbum:false
}
this.camera.getPicture(options).then((imageData) => {
  // imageData is either a base64 encoded string or a file URI
  // If it's base64:
  this.myphoto = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
  // Handle error
});
}

uploadImage(){
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
     var random = Math.floor(Math.random() * 100);

    let options: FileUploadOptions = {
      fileKey: 'photo',
      fileName: "myImage_" + random + ".jpg",
      chunkedMode: false,
      httpMethod: 'post',
      mimeType: "image/jpeg",
      headers: {}
    }
  let url = "https://volspb.ru/upload.php";
  let postData = new FormData();
 
  postData.append('file', this.base64Image);

  let data:Observable<any> = this.http.post(url, postData);
  data.subscribe((result) =>{
   alert("Success");
    loader.dismiss();
  });

}

upload(){
    //Show loading
 

    //create file transfer object
    const fileTransfer: FileTransferObject = this.transfer.create();

    //random int
    var random = Math.floor(Math.random() * 100);

    //option transfer
    let options: FileUploadOptions = {
      fileKey: 'photo',
      fileName: "myImage_" + random + ".jpg",
      chunkedMode: false,
      httpMethod: 'post',
      mimeType: "image/jpeg",
      headers: {}
    }

    //file transfer action
    fileTransfer.upload(this.myphoto, "https://volspb.ru/uploadPhoto.php", options)
      .then((data) => {
        alert("Success");
       
      }, (err) => {
        console.log(err);
        alert("Error");
        
      });
  }


getFeed() {
    this.authService.postData(this.userPostData, 'feed')
      .then((result) => {
        this.responseData = result;
        if (this.responseData.feedData) {
          this.dataSet = this.responseData.feedData;
        } else {console.log("NO access")}
      }, (err) => {

      });
  }

convertTime(created) {
    let date = new Date(created * 1000);
    return date;
  }




 backToHome(){

      this.navCtrl.push(Page1);
 }

  logout(){
  	//Api Token logout
      localStorage.clear();
  		setTimeout(()=> this.openHomePage(), 1000);
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
