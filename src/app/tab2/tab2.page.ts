import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  user: any = {
    displayName: '',
    photoURL: '',
    email: ''
  };

  constructor() {
    firebase.auth().onAuthStateChanged((fireuser) => {
      if(fireuser){
        this.user = fireuser.toJSON();
      } else {
        this.user = {
          displayName: '',
          photoURL: '',
          email: ''
        };
      }
    })
  }

}
