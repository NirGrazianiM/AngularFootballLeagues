import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LeaguesListComponent } from './Components/leagues-list/leagues-list.component';
import { LeagueCardComponent } from './Components/league-card/league-card.component';
import { TeamListComponent } from './Components/team-list/team-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeaguesListComponent,
    LeagueCardComponent,
    TeamListComponent,
  ],
  imports: [BrowserModule, MatButtonModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
