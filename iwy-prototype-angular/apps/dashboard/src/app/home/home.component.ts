import { Component, OnInit } from '@angular/core';
import { Artist } from '@iwy/api-interfaces';

@Component({
  selector: 'iwy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  widgets: Artist[] = [
    { id: '1', artistName: 'Widget 01', description: 'Pending' },
    { id: '2', artistName: 'Widget 02', description: 'Pending' },
    { id: '3', artistName: 'Widget 03', description: 'Pending' },
  ];
}