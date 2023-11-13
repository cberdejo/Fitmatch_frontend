import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminViewComponent } from './pages/admin-view/adminView.component';
import { ClienteViewComponent } from './pages/cliente-view/clienteView.component';
import { EntrenadorViewComponent } from './pages/entrenador-view/entrenadorView.component';
import { MainViewComponent } from './pages/main-view/mainView.component';

const routes: Routes = [  
  { path: 'viewAdmin', component: AdminViewComponent },
    { path: 'viewCliente', component: ClienteViewComponent  },
    { path: 'viewEntrenador', component: EntrenadorViewComponent  },
    { path: 'mainView', component: MainViewComponent  },
    { path: '', redirectTo: '/mainView', pathMatch: 'full' }, // Ruta por defecto
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
