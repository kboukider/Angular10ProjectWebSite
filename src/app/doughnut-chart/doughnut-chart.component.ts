import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.sass']
})
export class DoughnutChartComponent implements OnInit {
  public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [
    { data: [70, 20, 50, 10, 10, 20],
       label: 'Entreprise privée' },
      

  ];

  public chartLabels: Array<any> = ['Dévelopeur', 'Administrateur base de donnée', 'Analyste fonctionnel', 'Architecte', 'Chef de projet', 'Autres'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 150, 55, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 150, 55, 0.2)'
    ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }








  constructor() { }

  ngOnInit() {
  }

}
