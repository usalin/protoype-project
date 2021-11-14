import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';
import * as fromWidgets from './widgets.reducer';
import * as WidgetsSelectors from './widgets.selectors';

import {Artist} from '@iwy/api-interfaces';
import { Subject } from 'rxjs';
import { WidgetsService } from '@iwy/core-data';

@Injectable()
export class WidgetsFacade {
  private allWidgets = new Subject<Artist[]>();
  private selectedWidget = new Subject<Artist>();
  private mutations = new Subject();

  allWidgets$ = this.allWidgets.asObservable();
  selectedWidgets$ = this.selectedWidget.asObservable();
  mutations$ = this.mutations.asObservable();

  constructor(private widgetsService: WidgetsService) { }

  selectWidget(widget: Artist) {
    this.selectedWidget.next(widget);
  }

  loadWidgets() {
    this.widgetsService
    .all()
    .subscribe((artists: Artist[]) => this.allWidgets.next(artists));
  }
}
