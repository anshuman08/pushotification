import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from 'src/app/config/auth-constants';
import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from './../../services/auth.service';
import { ToastService } from './../../services/toast.service';

// import {ActionPerformed, PushNotificationSchema, PushNotifications, Token} from '@capacitor/push-notifications';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

    public postData = {
      username: '',
      password: '',
      usertoken: ''
    };

  constructor(
    private router: Router,
    private authService : AuthService, 
    private storageService : StorageService,
    private toastService : ToastService
    ){}

  

  ngOnInit() {  }

  validateInputs() {
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();
    return ( this.postData.username && this.postData.password && username.length > 0 && password.length > 0 );
    }

  loginAction(){

    console.log(this.postData);  

    if( this.validateInputs){
      this.authService.login(this.postData).subscribe((res: any)=> {
        if(res.userData){
          this.storageService.store(AuthConstants.AUTH, res.userData);
          this.router.navigate(['home/urldisp']);
        }else{
          console.log("Incorrect Username Or Password");
          this.toastService.presentToast('Incorrect username and password.');
        }
      },
      (error :any) => {
        this.toastService.presentToast('Network Issuess.' + JSON.stringify(error));
        console.log(JSON.stringify(error));
      }
      )
    }else{
      this.toastService.presentToast( 'Please enter username or password.' );
    }
 }

}
