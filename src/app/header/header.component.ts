import { Component, OnInit } from '@angular/core';
declare var google:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart(){
    var data = google.visualization.arrayToDataTable([
      ['Client1', 'Client2', 'Client3', 'Client4', 'Client5',
       'Client6', 'Client7', { role: 'annotation' } ],
      ['lun 12/04/2023', 10, 24, 20, 32, 18, 5, ''],
      ['mar 13/04/2023', 16, 22, 23, 30, 16, 9, ''],
      ['mer 14/04/2023', 28, 19, 29, 30, 12, 13, ''],
      ['jeu 15/04/2023', 10, 28, 25, 20, 26, 5, ''],
      ['ven 16/04/2023', 16, 22, 23, 30, 16, 9, ''],
      ['sam 17/04/2023', 16, 22, 23, 30, 16, 9, ''],
      ['dim 13/04/2023', 16, 22, 23, 30, 16, 9, ''],
    ]);
    var options={
      width:900,
      height:400,
      isStacked: true,
      legend:{position:'top',maxLines:3}
    };

    var chart = new google.visualization.ColumnChart(document.getElementById("divStakedColumnChart"));
    chart.draw(data,options)


  }

}
