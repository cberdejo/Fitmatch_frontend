import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminViewComponent } from './admin/pages/adminView.component';
import { ClienteViewComponent } from './cliente/pages/clienteView.component';
import { EntrenadorViewComponent } from './entrenador/entrenadorView.component';
import { MainViewComponent } from './login/pages/mainView.component';

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
