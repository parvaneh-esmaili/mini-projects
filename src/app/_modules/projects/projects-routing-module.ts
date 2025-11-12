import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './_pages/home/home';
import { Projects } from './projects';
import { MusicPlayer } from './_components/music-player/music-player';
import { TodoList } from './_components/todo-list/todo-list';

const routes: Routes = [
  {
    path: '',
    component: Projects,
    children: [
      {path: '', component: Home, pathMatch: 'full' },
      {path: 'home', component: Home},
      {path: 'music-player', component: MusicPlayer},
      {path: 'todo-list', component: TodoList}


    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
