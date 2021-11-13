import { Injectable } from '@nestjs/common';
import { Artist } from 'libs/api-interfaces/src/lib/api-interfaces';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class WidgetsService {
  mockWidgets: Artist[] = [
    { id: '1', artistName: 'The Cardigans', description: 'Band from Sweden' },
    { id: '2', artistName: 'The Music', description: 'Disruptive band from UK' },
    { id: '3', artistName: 'Kasabian', description: 'Hooligan Choir from Leicester' },
  ];

  findAll() {
    return this.mockWidgets;
  }

  findOne(id: string) {
    return this.mockWidgets.find((widget) => widget.id === id);
  }

  create(widget: Artist) {
    this.mockWidgets = [...this.mockWidgets, Object.assign({}, widget, { id: uuidv4() })];
    return this.mockWidgets;
  }

  update(id: string, widget: Artist) {
    this.mockWidgets = this.mockWidgets.map((w) => (w.id === id ? widget : w));
    return this.mockWidgets;
  }

  remove(id: string) {
    this.mockWidgets = this.mockWidgets.filter((widget) => widget.id !== id);
    return this.mockWidgets;
  }
}
