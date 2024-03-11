import { Injectable } from '@angular/core';
import { Cheatsheet } from '../interfaces/cheatsheet';

@Injectable({
  providedIn: 'root',
})
export class CheatsheetsService {
  constructor() {}

  getCheatsheets() {
    return this.cheatsheets;
  }

  cheatsheets: Cheatsheet[] = [
    {
      name: 'HTML Entities',
      description: 'Overview for all html entities',
      category: 'Symbols & Icons',
      icon: 'assets/icons/html5.svg',
      url: '/cheatsheets/html-entities'
    },
    {
      name: 'UTF-8 Symbols',
      description: 'Overview for all utf-8 symbols',
      category: 'Symbols & Icons',
      icon: 'assets/icons/html5.svg',
      url: '/cheatsheets/utf-eight-symbols'
    },
    {
      name: 'CSS Cursors',
      description: 'Overview of all available css cursors',
      category: 'Symbols & Icons',
      icon: 'assets/icons/cursor.svg',
      url: '/cheatsheets/css-cursors'
    }
  ];
}
