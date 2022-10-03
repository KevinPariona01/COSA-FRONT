import { Component, OnInit } from '@angular/core';
//import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

  public chartbar: any;
  public chartpie: any;

  estado = [
    {value: '1', viewValue: 'Estado1'},
    {value: '2', viewValue: 'Estado2'},
    {value: '3', viewValue: 'Estado3'}
  ];
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  select(select){

  }

  createChart(){

    if (this.chartbar != undefined) {
      this.chartbar.clear();
      this.chartbar.destroy();
    } 
  
    this.chartbar = new Chart("MyChartbar", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });

    if (this.chartpie != undefined) {
      this.chartpie.clear();
      this.chartpie.destroy();
    } 

    this.chartpie = new Chart("MyChartpie", {
      type: 'pie',
      data: {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [20,20,20,20,20],
            backgroundColor:['rgba(255, 97, 130,1.0)','rgba(255, 159, 64,1.0)','rgba(255, 205, 86,1.0)','rgba(75, 192, 192,1.0)','rgba(54, 162, 235,1.0)'],
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          /* title: {
            display: true,
            text: 'Chart.js Pie Chart'
          } */
        }
      },
      
    });
  }

  /* printToCart(printSectionId: string) {
    this.chart.printSectionId(printSectionId)
  } */

}
