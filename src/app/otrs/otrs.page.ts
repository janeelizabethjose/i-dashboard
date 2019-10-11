import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { Chart } from 'chart.js';

import { AuthenticationService } from '../services/Authentication.service';

@Component({
  selector: 'app-otrs',
  templateUrl: './otrs.page.html',
  styleUrls: ['./otrs.page.scss'],
})
export class OtrsPage implements OnInit {
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
        labels: ['Portal Support', 'MS-L1', 'Monitoring IT', 'YTLC Facilities', 'OTRS Support'],
        datasets: [{
          label: '2015',
          data: [20, 5, 13, 40, 20, 15],
          backgroundColor: [
            'rgba(62, 177, 119, 2)',
            'rgba(62, 177, 119, 2)',
            'rgba(62, 177, 119, 2)',
            'rgba(62, 177, 119, 2)',
            'rgba(62, 177, 119, 2)',
          ],
          borderColor: [
            'rgba(62, 177, 119, 1)',
            'rgba(62, 177, 119, 1)',
            'rgba(62, 177, 119, 1)',
            'rgba(62, 177, 119, 1)',
            'rgba(62, 177, 119, 1)',
          ],
          borderWidth: 1
        },
        {
          label: '2016',
          data: [12, 30, 60, 50, 90, 10],
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
          data: [40, 60, 23, 90, 65, 112],
          backgroundColor: [
            'rgba(218, 95, 46, 5)',
            'rgba(218, 95, 46, 5)',
            'rgba(218, 95, 46, 5)',
            'rgba(218, 95, 46, 5)',
            'rgba(218, 95, 46, 5)',
          ],
          borderColor: [
            'rgba(218, 95, 46, 1)',
            'rgba(218, 95, 46, 1)',
            'rgba(218, 95, 46, 1)',
            'rgba(218, 95, 46, 1)',
            'rgba(218, 95, 46, 1)',
          ],
          borderWidth: 1
        },
        {
          label: '2018',
          data: [20, 45, 54, 32, 78, 122],
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
          data: [78, 56, 101, 23, 120, 111],
          backgroundColor: [
            'rgba(169, 44, 134, 5)',
            'rgba(169, 44, 134, 5)',
            'rgba(169, 44, 134, 5)',
            'rgba(169, 44, 134, 5)',
            'rgba(169, 44, 134, 5)',
          ],
          borderColor: [
            'rgba(169, 44, 134, 1)',
            'rgba(169, 44, 134, 1)',
            'rgba(169, 44, 134, 1)',
            'rgba(169, 44, 134, 1)',
            'rgba(169, 44, 134, 1)',
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
        labels: ['New', 'In Progress', 'Resolved', 'Pending', 'Closed'],
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
            data: [65, 59, 80, 81, 56, 55, 40, 10, 45, 50, 10, 15],
            spanGaps: false,
          },
          {
            label: 'Open Tickets',
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
            label: 'Pending Tickets',
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
