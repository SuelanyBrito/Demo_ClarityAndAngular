import { Component, OnInit } from '@angular/core';
import '@cds/core/alert/register.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  modal: boolean = false;
  expanded: boolean = false;

  rootDirectory: any[] = [
    {
      name: 'Applications',
      icon: 'folder',
      expanded: true,
      files: [
        {
          icon: 'calendar',
          name: 'Calendar',
          active: true,
        },
        {
          icon: 'line-chart',
          name: 'Charts',
          active: false,
        },
        {
          icon: 'dashboard',
          name: 'Dashboard',
          active: false,
        },
        {
          icon: 'map',
          name: 'Maps',
          active: false,
        },
      ],
    },
    {
      name: 'Files',
      icon: 'folder',
      expanded: false,
      files: [
        {
          icon: 'file',
          name: 'Cover Letter.doc',
          active: false,
        },
      ],
    },
    {
      name: 'Images',
      icon: 'folder',
      expanded: false,
      files: [
        {
          icon: 'image',
          name: 'Screenshot.png',
          active: false,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  openFile(directoryName: string, fileName: string) {
    console.log('open file');
  }
}
