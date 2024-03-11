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
      name: 'Device Info',
      description: 'Get device infos like user-agent, screen size, etc..',
      category: 'General',
      icon: 'assets/icons/device.svg',
      url: '/tools/device-info',
    },
    {
      name: 'Base64',
      description: 'Encode and decode strings or images with Base64',
      category: 'Encoding & Decoding',
      icon: 'assets/icons/base64.svg',
      url: '/tools/base64',
    },
    {
      name: 'Text to JSON',
      description: 'Convert text to json format',
      category: 'Formatter',
      icon: 'assets/icons/ttj.svg',
      url: '/tools/text-to-json',
    }
  ];
}
