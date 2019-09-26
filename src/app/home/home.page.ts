import { Component } from '@angular/core';
import {  MenuController } from '@ionic/angular';

import { AuthenticationService } from '../services/Authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public menuCtrl: MenuController,
    private authService: AuthenticationService
  ) {}

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  logout() {
    this.authService.logout();
  }
}
