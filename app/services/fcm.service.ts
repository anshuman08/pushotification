import { Injectable, NgZone } from '@angular/core';
import { PushNotificationSchema, PushNotifications} from '@capacitor/push-notifications';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  session: any;

  notifications: PushNotificationSchema[] = [];

  constructor(private router: Router, private zone: NgZone) { }


  initPush() {
    console.log('I am here bazooka');
    if (Capacitor.getPlatform() !== 'web') {
      this.registerPush();
    }
  }


  private registerPush() {
    console.log('Initializing HomePage');    
 
    PushNotifications.addListener('registration', (data) => {
      // alert(JSON.stringify(data));
      console.log(data);
    });

    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        console.log('notification ' + JSON.stringify(notification));
        this.zone.run(() => {
          this.notifications.push(notification);
        });
      }
    );
    PushNotifications.requestPermissions().then((response) =>
      PushNotifications.register().then(() => console.log(`Token registered for push`))
    );
  }

}
