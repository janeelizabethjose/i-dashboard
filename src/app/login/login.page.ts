import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';

import { AuthenticationService } from '../services/Authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( 
    public menuCtrl: MenuController,
    private authService: AuthenticationService 
    ) { }

  ngOnInit() {
  }

  //to hide menu from login page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  loginUser(){
    this.authService.login()
  }

}
