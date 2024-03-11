import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss'],
})
export class Base64Component implements OnInit {
  input: string = '';
  output: string = '';
  action: string = 'encode';
  type: string = 'txt';
  selectedImg: any;

  showOutput = false;
  isFav = false;
  item = {
    name: 'Base64',
    description: 'Encode and decode strings or images with Base64',
    category: 'Encoding/Decoding',
    icon: 'assets/icons/base64.svg',
    url: '/tools/base64',
  };

  constructor(
    private favS: FavoritesService,
    private clipboard: Clipboard,
    private _snackBar: MatSnackBar
  ) {
    this.isFav = Boolean(this.favS.isFavorite(this.item));
  }

  ngOnInit(): void {}

  private toBase64(input: string) {
    return btoa(input);
  }

  private fromBase64(input: string) {
    return atob(input);
  }

  addToFav() {
    this.isFav = true;
    this.favS.addToFavorites(this.item);
  }

  handleInput() {
    this.showOutput = true;

    if (this.type == 'txt') {
      if (this.action.toLowerCase() == 'decode') {
        this.output = this.fromBase64(this.input);
      } else {
        this.output = this.toBase64(this.input);
      }
    }
  }

  setImage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.output = reader.result + '';
    };
  }

  copyText() {
    this.clipboard.copy(this.output);
    this._snackBar.open('Successfully copied.', 'Close');
  }
}
