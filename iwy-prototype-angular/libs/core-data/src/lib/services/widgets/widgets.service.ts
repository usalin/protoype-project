import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from '@iwy/api-interfaces';
import {environment} from '@env/environment';


@Injectable({
  providedIn: 'root',
})
export class WidgetsService {
  model = 'widgets';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Artist[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Artist>(this.getUrlWithId(id));
  }

  create(widget: Artist) {
    return this.http.post(this.getUrl(), widget);
  }

  update(widget: Artist) {
    return this.http.put(this.getUrlWithId(widget.id), widget);
  }

  delete(widget: Artist) {
    return this.http.delete(this.getUrlWithId(widget.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}