import { Injectable } from '@angular/core';
import { Tool } from '../interfaces/tool';

@Injectable({
  providedIn: 'root',
})
export class ToolService {
  constructor() {}

  getTools() {
    return this.tools;
  }

  tools: Tool[] = [
    {
      name: 'Base64',
      description: 'Encode and decode strings or images with Base64',
      category: 'Encoding & Decoding',
      icon: 'assets/icons/base64.svg',
      url: 'base64',
    },
  ];
}
