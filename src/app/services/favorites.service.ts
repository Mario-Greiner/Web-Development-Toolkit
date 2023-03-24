import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favs = JSON.parse(localStorage.getItem('favorite-apps') + '');

  constructor() {}

  getFavorites() {
    return this.favs;
  }

  addToFavorites(app: any) {
    if (localStorage.getItem('favorite-apps') != null) {
      let arr = JSON.parse(localStorage.getItem('favorite-apps') + '');
      arr.push(app);
    } else {
      let favs = [app];
      localStorage.setItem('favorite-apps', JSON.stringify(favs));
    }

    alert('successfully added ' + app?.name + ' to favorite apps.');
  }

  isFavorite(itemUrl: string) {
    let res = false;

    if (this.favs !== null) {
      for (const fav of this.favs) {
        //fav.name == item.name && fav.description == item.description && fav.category == item.category && fav.icon == item.icon && fav.url == item.url
        if (fav.url == itemUrl) {
          res = true;
        } else {
          res = false;
        }
      }
    }

    return res;
  }

  removeFavorite() {}
}
