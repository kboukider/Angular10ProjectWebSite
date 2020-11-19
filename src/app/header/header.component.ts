import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import * as firebase from 'firebase';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  language: string;
  isAuth: boolean;

  constructor(private languageService: LanguageService, private authService: AuthService) {
    this.language = this.languageService.language;
   }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }
  onSignOut() {
    this.authService.signOutUser();
  }

  changeLanguage(newLang: string) {
    this.languageService.changeLanguage(newLang);
  }

}
