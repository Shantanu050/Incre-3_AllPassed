import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { EditplayerComponent } from './editplayer/editplayer.component';
import { GetTeamsComponent } from './get-teams/get-teams.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { DeleteTeamComponent } from './delete-team/delete-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    DeletePlayerComponent,
    AddplayerComponent,
    EditplayerComponent,
    GetTeamsComponent,
    CreateTeamComponent,
    DeleteTeamComponent,
    EditTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
