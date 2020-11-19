import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {StatsPageComponent} from './stats-page/stats-page.component'
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';



 ;

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'statistics', component: StatsPageComponent },
   { path: 'type-employeur', component:  BarChartComponent },
   { path: 'moyen-obtention-emploi', component:  PieChartComponent  },
   { path: 'spécialité-informatique', component:   DoughnutChartComponent  },
   { path: 'secteur-activité', component:   PolarChartComponent  },






  
   

   
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
