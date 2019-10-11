import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { AuthenticationService } from '../services/Authentication.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

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
