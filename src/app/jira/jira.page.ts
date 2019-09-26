import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';

import { AuthenticationService } from '../services/Authentication.service';

@Component({
  selector: 'app-jira',
  templateUrl: './jira.page.html',
  styleUrls: ['./jira.page.scss'],
})
export class JiraPage implements OnInit {

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
