import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {

  constructor() { }

  public get favorites() {
    return JSON.parse(localStorage.getItem('favorite-apps') + '');
  }

  addToFavorites(app: any) {
    let favs = this.favorites;

    if (favs === null) {
      favs = [app];

    } else {
      favs.push(app);
    }

    localStorage.setItem('favorite-apps', JSON.stringify(favs));

    alert('Successfully added ' + app?.name + ' to favorite apps.');
  }

  isFavorite(search: any): boolean {
    let res = false;

    if (this.favorites !== null) {
      for (const fav of this.favorites) {
        //fav.name == item.name && fav.description == item.description && fav.category == item.category && fav.icon == item.icon && fav.url == item.url
        if (fav.name == search.name) {
          res = true;
        }
      }
    }

    return res;
  }

  removeFavorite(item: any) { }
}
