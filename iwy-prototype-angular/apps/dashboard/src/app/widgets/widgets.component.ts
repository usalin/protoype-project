import { Component, OnInit } from '@angular/core';
import { Artist } from '@iwy/api-interfaces';
import { WidgetsService } from '@iwy/core-data';
import { Observable } from 'rxjs';


const emptyWidget: Artist = {
  id: null,
  artistName: '',
  description: '',
}

@Component({
  selector: 'iwy-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  widgets$: Observable<Artist[]>;
  selectedWidget: Artist;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(null);
  }

  resetForm() {
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Artist) {
    this.selectedWidget = widget;
  }

  loadWidgets() {
    this.widgets$ = this.widgetsService.all();
  }

  saveWidget(widget: Artist) {
    if (widget.id) {
      this.updateWidget(widget);
    } else {
      this.createWidget(widget);
    }
  }

  createWidget(widget: Artist) {
    this.widgetsService.create(widget).subscribe((result) => this.reset());
  }

  updateWidget(widget: Artist) {
    this.widgetsService.update(widget).subscribe((result) => this.reset());
  }

  deleteWidget(widget: Artist) {
    this.widgetsService.delete(widget).subscribe((result) => this.reset());
  }
}