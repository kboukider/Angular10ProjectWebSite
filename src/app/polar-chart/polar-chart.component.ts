import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.sass']
})
export class PolarChartComponent implements OnInit {
  public chartType: string = 'polarArea';

  public chartDatasets: Array<any> = [
    { data: [36, 27, 19, 9, 20, 3],
       label: '' },
      

  ];
  
  public chartLabels: Array<any> = ['Editeur de logiciels', 'Web E-commerce', 'Industrie' , '  Télécoms', 'ESN:Entreprise de Services Numériques', 'Autres'];

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
      'rgba(255, 159, 64, 0.2)'
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
