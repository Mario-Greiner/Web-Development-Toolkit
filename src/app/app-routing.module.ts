import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchComponent } from './search/search.component';

import { ToolsOverviewComponent } from './tools/overview/overview.component';
import { Base64Component } from './tools/base64/base64.component';
import { DeviceInfoComponent } from './tools/device-info/device-info.component';
import { TextToJsonComponent } from './tools/text-to-json/text-to-json.component';

import { CheatsheetsOverviewComponent } from './cheatsheets/overview/overview.component';
import { HtmlEntitiesComponent } from './cheatsheets/html-entities/html-entities.component';
import { UtfEightSymbolsComponent } from './cheatsheets/utf-eight-symbols/utf-eight-symbols.component';
import { CssCursorComponent } from './cheatsheets/css-cursor/css-cursor.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'search/:searchTerm',
    component: SearchComponent
  },
  {
    path: 'tools',
    component: ToolsOverviewComponent
  },
  {
    path: 'tools/base64',
    component: Base64Component
  },
  {
    path: 'tools/device-info',
    component: DeviceInfoComponent
  },
  {
    path: 'tools/text-to-json',
    component: TextToJsonComponent
  },
  {
    path: 'cheatsheets',
    component: CheatsheetsOverviewComponent
  },
  {
    path: 'cheatsheets/utf-eight-symbols',
    component: UtfEightSymbolsComponent
  },
  {
    path: 'cheatsheets/html-entities',
    component: HtmlEntitiesComponent
  },
  {
    path: 'cheatsheets/css-cursors',
    component: CssCursorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
