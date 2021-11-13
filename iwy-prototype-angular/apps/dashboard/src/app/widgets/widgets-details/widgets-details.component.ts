import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Artist } from '@iwy/api-interfaces';


@Component({
  selector: 'fem-widget-details',
  templateUrl: './widgets-details.component.html',
  styleUrls: ['./widgets-details.component.scss']
})
export class WidgetDetailsComponent {
  currentWidget: Artist;
  originalTitle = '';
  @Input() set widget(value: Artist) {
    if(value) this.originalTitle = value.artistName;
    this.currentWidget = {...value};
  };
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
}