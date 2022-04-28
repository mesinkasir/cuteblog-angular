import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  items = [];

  getItems() {
    return this.items;
  }

  constructor(
        private http: HttpClient
  ) {}

}