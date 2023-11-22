import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { EditplayerComponent } from './editplayer/editplayer.component';
import { GetTeamsComponent } from './get-teams/get-teams.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { DeleteTeamComponent } from './delete-team/delete-team.component';

const routes: Routes = [
  {path:'listPlayer',component:PlayerComponent},
  {path:'deletePlayer/:id',component:DeletePlayerComponent},
  {path:'addPlayer',component:AddplayerComponent},
  {path:'editPlayer/:id',component:EditplayerComponent},
  {path:'listTeams',component:GetTeamsComponent},
  {path:'addTeams',component:CreateTeamComponent},
  {path:'deleteTeam/:id',component:DeleteTeamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
