import { Routes } from '@angular/router';
import { AppRoutes } from './core/constants/const';

export const routes: Routes = [
  {
    path: AppRoutes.MAIN,
    title: 'MGL | dev',
    loadComponent: () =>
      import('./pages/main/main.component').then((m) => m.MainComponent),
  },
];
