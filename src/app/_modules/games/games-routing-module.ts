import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './_pages/home/home';
import { RockPaperScissors } from './_pages/rock-paper-scissors/rock-paper-scissors';
import { Games } from './games';
import { GuessTheNumber } from './_pages/guess-the-number/guess-the-number';
import { MemoryGame } from './_pages/memory-game/memory-game';

const routes: Routes = [
  {path: '', component: Games, children:[
    { path: '', component: Home, pathMatch: 'full' },
    { path: 'rock-paper-scissors', component:  RockPaperScissors },
    { path: 'guess-the-number', component:  GuessTheNumber },
    { path: 'memory-game', component: MemoryGame}

  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
