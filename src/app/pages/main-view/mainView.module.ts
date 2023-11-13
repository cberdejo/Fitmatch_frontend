import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageService } from 'primeng/api';
import { MainViewComponent } from './mainView.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainViewComponent, LoginComponent, RegisterComponent, MainComponent],

  exports: [MainViewComponent, LoginComponent, RegisterComponent, MainComponent],
  providers: [MessageService],
})
export class MainViewModule { }
