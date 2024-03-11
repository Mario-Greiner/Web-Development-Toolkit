import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-css-cursor',
  templateUrl: './css-cursor.component.html',
  styleUrls: ['./css-cursor.component.scss'],
})
export class CssCursorComponent implements OnInit {
  isFav = false;
  item = {
    name: 'CSS Cursors',
    description: 'Overview of all available css cursors',
    category: 'Symbols & Icons',
    icon: 'assets/icons/cursor.svg',
    url: '/cheatsheets/css-cursors',
  };

  constructor(private favS: FavoritesService) {}

  ngOnInit(): void {}

  cursor = 'default';

  selectionEvent(event: any) {
    this.cursor = event.target.value;
  }

  addToFav() {
    this.isFav = true;
    this.favS.addToFavorites(this.item);
  }
}
