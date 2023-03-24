import { Component } from '@angular/core';
import { ToolService } from 'src/app/services/tools.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class ToolsOverviewComponent {
  tools = this.toolService.getTools();

  constructor(
    private toolService: ToolService,
    private favS: FavoritesService
  ) {}

  isFav(item: any) {
    return this.favS.isFavorite(item);
  }
}
