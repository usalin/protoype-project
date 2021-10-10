import { Component, OnInit } from '@angular/core';
import { Widget } from '@iwy/api-interfaces';
import {WidgetsService} from '@iwy/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'iwy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  widgets$: Observable<Widget[]>;

  constructor(private widgetService: WidgetsService) {  }

  ngOnInit() {
    this.widgets$ = this.widgetService.all();
  }
}
