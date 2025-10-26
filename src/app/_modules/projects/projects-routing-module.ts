import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './_pages/home/home';
import { Projects } from './projects';
import { MusicPlayer } from './_pages/music-player/music-player';

const routes: Routes = [
  {
    path: '',
    component: Projects,
    children: [
      { path: '', component: Home, pathMatch: 'full' },
      {path: 'home', component: Home},
      {path: 'music-player', component: MusicPlayer}

    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
