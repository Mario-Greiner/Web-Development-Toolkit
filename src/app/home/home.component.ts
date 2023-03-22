import { Component, OnInit } from '@angular/core';

export interface Tool {
  name: string;
  description: string;
  category: string;
  icon: string;
  url: string;
  hidden: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tools: Tool[] = [
    {
      name: 'Base64 Encoder/Decoder',
      description: 'Encode and decode strings or images with Base64 encoding',
      category: 'Encoding/Decoding',
      icon: 'assets/icons/base6.svg',
      url: 'base64',
      hidden: false,
    }
  ];
}
