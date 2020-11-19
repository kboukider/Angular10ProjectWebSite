import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {config} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'personal-website-template';
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyD1Di5-aMZTiskePeeQdaN5ZwRMLQnboIU",
      authDomain: "anciensccitours-78111.firebaseapp.com",
      databaseURL: "https://anciensccitours-78111.firebaseio.com",
      projectId: "anciensccitours-78111",
      storageBucket: "anciensccitours-78111.appspot.com",
      messagingSenderId: "546657049271",
      appId: "1:546657049271:web:0ce60377e18ef93b690b32",
      measurementId: "G-720RP242JD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
