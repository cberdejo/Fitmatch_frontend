import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewModule } from './login/pages/mainView.module';
import { AdminViewModule } from './admin/adminView.module';
import { ClienteViewModule } from './cliente/pages/clienteView.module';
import { EntrenadorViewModule } from './entrenador/entrenadorView.module';
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
