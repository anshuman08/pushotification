import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FcmService } from './../../services/fcm.service';
import { Platform } from '@ionic/angular';
import { PushNotifications, PushNotificationSchema } from '@capacitor/push-notifications';
import { FCM } from '@capacitor-community/fcm';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/config/auth-constants';
import { ToastService } from './../../services/toast.service';

@Component({
  selector: 'app-urldisp',
  templateUrl: './urldisp.page.html',
  styleUrls: ['./urldisp.page.scss'],
})
export class UrldispPage implements OnInit {

  displayUserdata: any;
  urll = "";
  tokenstate = "";
  username = "";
  notifications: PushNotificationSchema[] = [];
  topicName = 'virtual-splat-push';
  remoteToken: string;
  
  consoleToken: string;

  constructor(private authService: AuthService, private platform: Platform, private fcmService: FcmService, private storageService : StorageService, private toastService : ToastService) { }

  public postData = {
    username: '',
    userfiretoken: ''
  };

  ngOnInit() {
    this.authService.userData$.subscribe(res => {
      this.displayUserdata = res;
      console.log("At URL DISP Page: " + res);
      this.urll = res.url;
      this.tokenstate = res.istoken;
      console.log("***************  In AUTH service Token state is : " + this.tokenstate);
      this.username = res.username;
      console.log("At User name DISP Page: " + res);
    
    this.postData.username = this.username;


    if(this.tokenstate == "FALSE"){
      console.log("***************  m in if condition ");
      console.log("***************  Token state is : " + this.tokenstate);
    this.fcmService.initPush();

    FCM.getToken().then((result) => {
            this.postData.userfiretoken = result.token;
            console.log("Device Token---: " + result.token);
            

          console.log("***************  m in FCM Get token ");

          console.log("***************  token value is : " + this.postData.userfiretoken);
          this.authService.tokenRegister(this.postData).subscribe((res: any)=> {
            if(res.userData){
              this.storageService.store(AuthConstants.AUTH, res.userData);
              
            }else{
              console.log("Token Not Stored");
              this.toastService.presentToast('Token Not Stored');
            }
          },
          (error :any) => {
            this.toastService.presentToast('Network Issuess.' + JSON.stringify(error));
            console.log(JSON.stringify(error));
          }
          )

     }).catch((err) => console.log(err));

    }

  });

  }

  
  subscribeTo() {
    PushNotifications.register()
      .then((_) => {
        FCM.subscribeTo({ topic: this.topicName })
          .then((r) => 
           
           alert(`subscribed to topic ${this.topicName}`)).catch((err) => console.log(err));
           
      })
      .catch((err) => alert(JSON.stringify(err)));
  }

  unsubscribeFrom() {
    FCM.unsubscribeFrom({ topic: this.topicName })
      .then((r) => alert(`unsubscribed from topic ${this.topicName}`))
      .catch((err) => console.log(err));

    if (this.platform.is('android')) {
      FCM.deleteInstance();
    }
  }

  getToken() {
    FCM.getToken()
      .then((result) => {
        this.remoteToken = result.token;
        console.log("Device Token---: " + result.token);
      })
      .catch((err) => console.log(err));
  }

}
