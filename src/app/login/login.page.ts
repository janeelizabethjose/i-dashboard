import { Component, OnInit } from '@angular/core';
import {  MenuController, NavController, ModalController } from '@ionic/angular';

import { AuthenticationService } from '../services/Authentication.service';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoading = false;
  constructor( 
    private modalController: ModalController,
    private navCtrl: NavController,
    private alertService: AlertService,
    public menuCtrl: MenuController,
    private authService: AuthenticationService,
    public loadingController: LoadingController
    ) { }

  ngOnInit() {
  }

  //to hide menu from login page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }

  async registerModal() {
    //this.dismissLogin();
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }

  login(form: NgForm) {
    // this.isLoading = true;
    // this.loadingController.create({
    //   message: 'Please wait....',
    // }).then((res) => {
    //   res.present();
    // });
    if(form.value.email && form.value.password){
      this.authService.login(form.value.email, form.value.password).subscribe(
        data => {
          if( data['status'] == 'Success' ) {
            this.navCtrl.navigateRoot('/home');
          }else{
            this.alertService.presentToast('Invalid Email Address or Password');
          }
        },
        error => {
          console.log(error);
        }
      );
    }else{
      this.alertService.presentToast('Please Enter Your Username and Password!');
    }
  }
}
