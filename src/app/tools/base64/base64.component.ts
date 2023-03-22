import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss']
})
export class Base64Component implements OnInit {

  textToEncode: string = '';
  textToDecode: string = '';

  showEncodedText = false;
  showDecodedText = false;

  encoded = '';
  decoded = '';

  constructor() { }

  ngOnInit(): void {
  }

  private toBase64(input: string){
    return btoa(input);
  }

  private fromBase64(input: string){
    return atob(input);
  }

  encode(){
    this.showEncodedText = true;
    this.encoded = this.toBase64(this.textToEncode);
  }

  decode(){
    this.showDecodedText = true;
    this.decoded = this.fromBase64(this.textToDecode);
  }

}
