import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { Chart } from 'chart.js';

import { AuthenticationService } from '../services/Authentication.service';

@Component({
  selector: 'app-yescrm',
  templateUrl: './yescrm.page.html',
  styleUrls: ['./yescrm.page.scss'],
})
export class YescrmPage implements OnInit {
  barChart: any;
  doughnutChart: any;
  lineChart: any;

  @ViewChild('barCanvas', {static: true}) barCanvas : ElementRef;
  @ViewChild('doughnutCanvas', {static: true}) doughnutCanvas : ElementRef;
  @ViewChild('lineCanvas', {static: true}) lineCanvas: ElementRef;
 
  constructor(
    public authService: AuthenticationService,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.barChartMethod();
    this.doughnutChartMethod();
    this.lineChartMethod();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  logout() {
    this.authService.logout();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Open', 'In Progress', 'WCR', 'Pending', 'Cancelled', 'Closed'],
        datasets: [{
          label: '# of Tickets',
          data: [250, 130, 80, 40, 60, 180],
          backgroundColor: [
            'rgba(255, 99, 132, 5)',
            'rgba(54, 162, 235, 5)',
            'rgba(255, 206, 86, 5)',
            'rgba(75, 192, 192, 5)',
            'rgba(153, 102, 255, 5)',
            'rgba(255, 159, 64, 5)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
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
        labels: ['BSSOSS', 'DEALER HELPDESK', 'MyYes4G', 'PRODUCT MARKETING', 'RETENTION TEAM'],
        datasets: [{
          label: '# of Tickets',
          data: [50, 78, 152, 35, 99],
          backgroundColor: [
            'rgba(255, 159, 64)',
            'rgba(255, 99, 132)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
            'rgba(153, 102, 255)',
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
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
            label: 'Open Tickets',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 10, 45, 50, 10, 15],
            spanGaps: false,
          },
          {
            label: 'Closed Tickets',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(231,92,170)',
            borderColor: 'rgba(192,75,140)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(192,75,140)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(192,75,140)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [60, 30, 75, 72, 45, 32, 34, 8, 3, 42, 7, 13],
            spanGaps: false,
          },
          {
            label: 'Re-Open Tickets',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(222, 130, 50)',
            borderColor: 'rgba(222, 130, 50)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(222, 130, 50)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(222, 130, 50)',
            pointHoverBorderColor: 'rgba(222, 130, 50)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [10, 5, 15, 2, 24, 8, 32, 5, 1, 7, 7, 2],
            spanGaps: false,
          }
        ]
      }
    });
  }
}
