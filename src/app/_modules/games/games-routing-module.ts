import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './_pages/home/home';
import { RockPaperScissors } from './_pages/rock-paper-scissors/rock-paper-scissors';
import { Games } from './games';

const routes: Routes = [
  {path: '', component: Games, children:[
      { path: '', component: Home, pathMatch: 'full' },
    { path: 'rock-paper-scissors', component:  RockPaperScissors },

  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
