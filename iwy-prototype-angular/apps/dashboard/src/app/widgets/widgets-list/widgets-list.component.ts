import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Artist } from '@iwy/api-interfaces';


@Component({
  selector: 'fem-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss']
})
export class WidgetsListComponent {
  @Input() widgets: Artist[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}