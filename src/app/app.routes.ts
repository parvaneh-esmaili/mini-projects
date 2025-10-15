import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', 
        loadChildren: () =>
		import('./_modules/games/games-module').then((m) => m.GamesModule),
	},];
