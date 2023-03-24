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
      description: 'Encode/decode and overview for all html entities',
      category: 'Symbols/Icons',
      icon: 'assets/icons/html5.svg',
      url: 'html-entities',
    },
    {
      name: 'CSS Cursors',
      description: 'Overview of all available css cursors',
      category: 'Symbols/Icons',
      icon: 'assets/icons/html5.svg',
      url: 'css-cursor',
    },
  ];
}
