import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from '@iwy/api-interfaces';


@Component({
  selector: 'fem-widget-details',
  templateUrl: './widgets-details.component.html',
  styleUrls: ['./widgets-details.component.scss']
})
export class WidgetDetailsComponent {
  currentWidget: Widget;
  originalTitle = '';
  @Input() set widget(value: Widget) {
    if(value) this.originalTitle = value.title;
    this.currentWidget = {...value};
  };
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
}