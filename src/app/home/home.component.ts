import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  slides: string[] = [
    'assets/home.jpg',
    'assets/master.jpg',
    'assets/stats.jpg',
    'assets/biblio.jpg',
    'assets/forum.jpg',
  ]

  language: string;

  constructor(private languageService: LanguageService) {
    this.language = this.languageService.language;
   }

  ngOnInit() {
  }

}
