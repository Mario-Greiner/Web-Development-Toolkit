import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss'],
})
export class Base64Component implements OnInit {
  input: string = '';
  output: string = '';
  action: string = 'encode';

  showOutput = false;
  isFav = false;

  constructor(private favS: FavoritesService) {
    this.isFav = this.favS.isFavorite('base64');
  }

  ngOnInit(): void {}

  private toBase64(input: string) {
    return btoa(input);
  }

  private fromBase64(input: string) {
    return atob(input);
  }

  addToFav() {
    let fav = {
      name: 'Base64',
      description: 'Encode and decode strings or images with Base64',
      category: 'Encoding/Decoding',
      icon: 'assets/icons/base64.svg',
      url: 'base64',
    };

    this.isFav = true;
    this.favS.addToFavorites(fav);
  }

  handleInput() {
    this.showOutput = true;
    if (this.action.toLowerCase() == 'decode') {
      this.output = this.fromBase64(this.input);
    } else {
      this.output = this.toBase64(this.input);
    }
  }
}
