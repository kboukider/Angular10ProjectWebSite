import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit {

  slides: string[] = [
    'assets/home.jpg',
    'assets/master.jpg',
    'assets/stats.jpg',
    'assets/biblio.jpg',
    'assets/forum.jpg',
  ];

  language: string;

  constructor(private languageService: LanguageService) {
    this.language = this.languageService.language;
   }

  ngOnInit() {
  }

}
