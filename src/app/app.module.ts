import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatCommonModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { FavoritesComponent } from './favorites/favorites.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchComponent } from './search/search.component';

import { ToolsOverviewComponent } from './tools/overview/overview.component';
import { Base64Component } from './tools/base64/base64.component';

import { CheatsheetsOverviewComponent } from './cheatsheets/overview/overview.component';
import { HtmlEntitiesComponent } from './cheatsheets/html-entities/html-entities.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    SettingsComponent,
    SearchComponent,
    ToolsOverviewComponent,
    Base64Component,
    CheatsheetsOverviewComponent,
    HtmlEntitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatExpansionModule,
    MatSnackBarModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
