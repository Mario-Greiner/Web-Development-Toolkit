import { Component } from '@angular/core';
import { CheatsheetsService } from 'src/app/services/cheatsheets.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class CheatsheetsOverviewComponent {
  cheatsheets = this.csService.getCheatsheets();

  constructor(
    private csService: CheatsheetsService,
    private favS: FavoritesService
  ) {}

  isFav(item: any) {
    return this.favS.isFavorite(item);
  }
}
