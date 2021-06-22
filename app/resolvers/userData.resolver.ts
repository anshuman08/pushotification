import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
    providedIn: 'root'
    })



    export class UserDataResolver {

       constructor (private authService: AuthService){}

       resolve(){
           console.log("Calls THe home router");
            return this.authService.getUserData();
       }


    }