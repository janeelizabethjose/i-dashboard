import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform, NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { EnvService } from './env.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn = false;
  token:any;
  authState = new BehaviorSubject(false);
  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController,
    private http: HttpClient,
    private env: EnvService,
    private navCtrl: NavController,
  ) { 
    this.platform.ready().then(() => {
      //this.ifLoggedIn();
    });
  }
  // ifLoggedIn() {
  //   this.storage.get('USER_INFO').then((response) => {
  //     if (response) {
  //       this.authState.next(true);
  //     }
  //   });
  // }
 
  // login() {
  //   var dummy_response = {
  //     user_id: '007',
  //     user_name: 'test'
  //   };
  //   this.storage.set('USER_INFO', dummy_response).then((response) => {
  //     this.router.navigate(['home']);
  //     this.authState.next(true);
  //   });
  // }
 
  // logout() {
  //   this.storage.remove('USER_INFO').then(() => {
  //     this.router.navigate(['login']);
  //     this.authState.next(false);
  //   });
  // }
 
  // isAuthenticated() {
  //   return this.authState.value;
  // }

  login( email: String, password: String ) {
    return this.http.post(this.env.API_URL + 'login',
      {email: email, password: password}
    ).pipe(
      tap(token => {
        this.storage.set('token', token)
        .then(
          () => {
            console.log(token);
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }

  register(fName: String, lName: String, email: String, password: String) {
    return this.http.post(this.env.API_URL + 'register',
      {fName: fName, lName: lName, email: email, password: password}
    )
  }

  logout() {
    // const headers = new HttpHeaders({
    //   'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    // });
    // return this.http.get(this.env.API_URL + 'logout', { headers: headers })
    // .pipe(
    //   tap(data => {
        this.storage.remove("token");
        this.isLoggedIn = false;
        delete this.token;
        this.navCtrl.navigateRoot('/login');
       // return data;
    //   })
    // )
  }

  user() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get<User>(this.env.API_URL + 'user', { headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  getToken() {
    return this.storage.get('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
}
