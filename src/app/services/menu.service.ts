import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  clickReload: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
}
