import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { Chart } from 'chart.js';

import { AuthenticationService } from '../services/Authentication.service';

@Component({
  selector: 'app-jira',
  templateUrl: './jira.page.html',
  styleUrls: ['./jira.page.scss'],
})
export class JiraPage implements OnInit {

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  @ViewChild('barCanvas', {static: true}) barCanvas : ElementRef;
  @ViewChild('doughnutCanvas', {static: true}) doughnutCanvas : ElementRef;
  @ViewChild('lineCanvas', {static: true}) lineCanvas: ElementRef;

  constructor(
    public menuCtrl: MenuController,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  } 
  
  ngAfterViewInit() {
    this.barChartMethod();
    this.doughnutChartMethod();
    this.lineChartMethod();
  }
  
  // ionViewWillEnter() {
  //   this.menuCtrl.enable(true);
  // }

  logout() {
    this.authService.logout();
  }
  
  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Portal', 'PRID', 'Mobile Dealers', '4CRS', 'LTE'],
        datasets: [{
          label: '2015',
          data: [20, 50, 0, 40, 10, 25],
          backgroundColor: [
            'rgba(36, 175, 183, 2)',
            'rgba(36, 175, 183, 2)',
            'rgba(36, 175, 183, 2)',
            'rgba(36, 175, 183, 2)',
            'rgba(36, 175, 183, 2)',
          ],
          borderColor: [
            'rgba(36, 175, 183, 1)',
            'rgba(36, 175, 183, 1)',
            'rgba(36, 175, 183, 1)',
            'rgba(36, 175, 183, 1)',
            'rgba(36, 175, 183, 1)',
          ],
          borderWidth: 1
        },
        {
          label: '2016',
          data: [32, 25, 0, 50, 60, 10],
          backgroundColor: [
            'rgba(218, 181, 46, 5)',
            'rgba(218, 181, 46, 5)',
            'rgba(218, 181, 46, 5)',
            'rgba(218, 181, 46, 5)',
            'rgba(218, 181, 46, 5)',
          ],
          borderColor: [
            'rgba(218, 181, 46, 1)',
            'rgba(218, 181, 46, 1)',
            'rgba(218, 181, 46, 1)',
            'rgba(218, 181, 46, 1)',
            'rgba(218, 181, 46, 1)',
          ],
          borderWidth: 1
        },
        {
          label: '2017',
          data: [23, 40, 23, 20, 75, 45],
          backgroundColor: [
            'rgba(124, 238, 32, 5)',
            'rgba(124, 238, 32, 5)',
            'rgba(124, 238, 32, 5)',
            'rgba(124, 238, 32, 5)',
            'rgba(124, 238, 32, 5)',
          ],
          borderColor: [
            'rgba(124, 238, 32, 1)',
            'rgba(124, 238, 32, 1)',
            'rgba(124, 238, 32, 1)',
            'rgba(124, 238, 32, 1)',
            'rgba(124, 238, 32, 1)',
          ],
          borderWidth: 1
        },
        {
          label: '2018',
          data: [67, 23, 30, 45, 65, 76],
          backgroundColor: [
            'rgba(41, 146, 188, 5)',
            'rgba(41, 146, 188, 5)',
            'rgba(41, 146, 188, 5)',
            'rgba(41, 146, 188, 5)',
            'rgba(41, 146, 188, 5)',
          ],
          borderColor: [
            'rgba(41, 146, 188, 1)',
            'rgba(41, 146, 188, 1)',
            'rgba(41, 146, 188, 1)',
            'rgba(41, 146, 188, 1)',
            'rgba(41, 146, 188, 1)',
          ],
          borderWidth: 1
        },
        {
          label: '2019',
          data: [34, 56, 76, 23, 87, 43],
          backgroundColor: [
            'rgba(221, 95, 214, 5)',
            'rgba(221, 95, 214, 5)',
            'rgba(221, 95, 214, 5)',
            'rgba(221, 95, 214, 5)',
            'rgba(221, 95, 214, 5)',
          ],
          borderColor: [
            'rgba(221, 95, 214, 1)',
            'rgba(221, 95, 214, 1)',
            'rgba(221, 95, 214, 1)',
            'rgba(221, 95, 214, 1)',
            'rgba(221, 95, 214, 1)',
          ],
          borderWidth: 1
        },
      ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  doughnutChartMethod() {
    // change later
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Task', 'Bug', 'Improvement', 'New Feature'],
        datasets: [{
          label: '# of Tickets',
          data: [50, 78, 152, 35],
          backgroundColor: [
            'rgba(255, 159, 64)',
            'rgba(255, 99, 132)',
            'rgba(255, 206, 86)',
            'rgba(153, 102, 255)',
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FF6384'
          ]
        }]
      }
    });
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        datasets: [
          {
            label: 'Closed Tickets',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(68, 183, 36, 0.4)',
            borderColor: 'rgba(68, 183, 36, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(68, 183, 36, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(68, 183, 36, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [60, 30, 75, 72, 45, 32, 34, 8, 3, 42, 7, 13],
            spanGaps: false,
          },
          {
            label: 'Open Tickets',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(238, 42, 32)',
            borderColor: 'rgba(238, 42, 32)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(238, 42, 32)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(238, 42, 32)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 10, 45, 50, 10, 15],
            spanGaps: false,
          }
        ]
      }
    });
  }
}
