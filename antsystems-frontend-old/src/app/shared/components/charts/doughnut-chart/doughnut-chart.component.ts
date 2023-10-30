import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chart') chart: ElementRef;
  @Input() title: string;
  config: any;

  data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 25, 40, 20, 5],
        backgroundColor: [
          'rgb(31,120,180)',
          'rgb(166,206,227)',
          'rgb(178,223,138)',
          'rgb(51,160,44)',
          'rgb(251,154,153)',
          'rgb(227,26,28)'
        ],
        borderWidth: 0
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    Chart.register(ChartDataLabels);
    this.config = {
      plugins: [ChartDataLabels],
      type: 'doughnut',
      data: this.data,
      options: {
        animation: {
          duration: 0
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            font: {size: 34},
            color: 'black',
            // debug: true,
          }
        },
        cutout: '80%',
        padding: 100
      },
      tooltips: {enabled: false},
      hover: {mode: null},
    };
  }

  ngAfterViewInit(): void {
    const myChart = new Chart(
      this.chart.nativeElement,
      this.config
    );
  }

}
