import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoritesComponent } from './favorites/favorites.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchComponent } from './search/search.component';

import { ToolsOverviewComponent } from './tools/overview/overview.component';
import { Base64Component } from './tools/base64/base64.component';

import { CheatsheetsOverviewComponent } from './cheatsheets/overview/overview.component';
import { HtmlEntitiesComponent } from './cheatsheets/html-entities/html-entities.component';

const routes: Routes = [
  {
    path: '',
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
    path: 'cheatsheets',
    component: CheatsheetsOverviewComponent
  },
  {
    path: 'cheatsheets/html-entities',
    component: HtmlEntitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
