import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/home/home')
        .then(c => c.Home)
    }
  },
  
  {
    path: 'login', 
    loadComponent: () => {
      return import('./pages/login/login')
        .then(c => c.Login)
    }
  },

  {
    path: 'cultos', 
    loadComponent: () => {
      return import('./pages/cultos/cultos')
        .then(c => c.Cultos)
    }
  },
 
  {
    path: 'oracao', 
    loadComponent: () => {
      return import('./pages/oracao/oracao')
        .then(c => c.Oracao)
    }
  }
];