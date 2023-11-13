import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewModule } from './pages/main-view/mainView.module';
import { AdminViewModule } from './pages/admin-view/adminView.module';
import { ClienteViewModule } from './pages/cliente-view/clienteView.module';
import { EntrenadorViewModule } from './pages/entrenador-view/entrenadorView.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminViewModule,
    MainViewModule,
    EntrenadorViewModule,
    ClienteViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
