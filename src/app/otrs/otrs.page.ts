import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';

import { AuthenticationService } from '../services/Authentication.service';

@Component({
  selector: 'app-otrs',
  templateUrl: './otrs.page.html',
  styleUrls: ['./otrs.page.scss'],
})
export class OtrsPage implements OnInit {

  constructor(
    public menuCtrl: MenuController,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  logout() {
    this.authService.logout();
  }

}
