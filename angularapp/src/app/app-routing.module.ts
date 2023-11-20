import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';

const routes: Routes = [
  {path:'listPlayer',component:PlayerComponent},
  {path:'deletePlayer/:id',component:DeletePlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
