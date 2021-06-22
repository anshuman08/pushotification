import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FCM } from '@capacitor-community/fcm';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  topicName = 'virtual-splat-push';

  constructor(private authService: AuthService, private platform: Platform) { }

  ngOnInit() {
  }

  logoutAction(){
    window.location.reload(true);
    FCM.unsubscribeFrom({ topic: this.topicName })
      .then((r) => alert(`unsubscribed from topic ${this.topicName}`))
      .catch((err) => console.log(err));

    if (this.platform.is('android')) {
      FCM.deleteInstance();
    }
    this.authService.logout();
  }

}
