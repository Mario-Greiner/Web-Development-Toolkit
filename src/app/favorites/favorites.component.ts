import { Component } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';

export interface FavoriteApp {
  name: string;
  description: string;
  category: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  constructor(private favS: FavoritesService) {
    if (localStorage.getItem('fav')) {
      this.favs = JSON.parse(localStorage.getItem('fav') + '');
    }

    console.info(this.favs);
  }

  favs: FavoriteApp[] = this.favS.favorites;
}
