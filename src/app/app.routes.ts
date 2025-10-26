import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', 
        loadChildren: () =>
		import('./_modules/projects/projects-module').then((m) => m.ProjectsModule),
	},];
