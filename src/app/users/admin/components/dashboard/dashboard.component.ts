import { Component, ViewChild, OnInit, inject } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Store } from '@ngrx/store';
//import { DashboardData } from '../../models/dashboard-data.model';


import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: '#666666'
      },
    },
    backgroundColor: "teal",
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<'bar'> = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Completed',
        backgroundColor: "#26c6da"
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Incomplete',
        backgroundColor: "#ff8a80"
      },
    ]
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }


  //dashboardData$!: AdminState;
  //private store = inject(Store<{dashboardData: DashboardData}>)

  constructor() {

  }

  ngOnInit() {
    //this.store.dispatch(loadDashboardData())
    //this.dashboardData$ = this.store.select((data) => data.dashboardData)
  }
}
