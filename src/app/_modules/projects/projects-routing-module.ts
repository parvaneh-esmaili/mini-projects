import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './_pages/home/home';
import { Projects } from './projects';

const routes: Routes = [
  {
    path: '',
    component: Projects,
    children: [
      { path: '', component: Home, pathMatch: 'full' },

    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
