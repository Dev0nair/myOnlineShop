import { Component } from '@angular/core';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private googlePlus: GooglePlus, 
    private platform: Platform,
    private toastcontroller: ToastController,
    private fireAuth: AngularFireAuth
    ) {}

  login(){

    if(this.platform.is('cordova')){
      this.googlePlus.login({})
      .then((response) => {
        const { idToken, accessToken } = response
        this.onLoginSuccess(idToken, accessToken);
      })
      .catch(err => this.mensaje('Ha surgido un error al hacer login! -> ' + err));
    } else {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((response) => {
        this.mensaje('Hola ' + response.user.displayName);
      }).catch((err) => {
        this.mensaje('Error -> ' + err );
      })
    }
  }

  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
        .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
            .credential(accessToken);
            firebase.auth().signInWithCredential(credential)
      .then((response) => {
        this.mensaje('Hola ' + response.user.displayName);
      })

  }

  logout(){
    if(this.platform.is('cordova')){
      this.googlePlus.logout();
    } else {
      firebase.auth().signOut();
    }
  }

  async mensaje(msg){
    const toast = await this.toastcontroller.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}


/*
this.user = {
          uid: user.uid,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime,
          isAnonymous: user.isAnonymous,
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
          refreshToken: user.refreshToken
*/