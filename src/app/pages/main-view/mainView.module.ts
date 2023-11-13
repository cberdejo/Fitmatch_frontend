import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageService } from 'primeng/api';

import { CheckboxModule } from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MainViewComponent } from './mainView.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';

import { GalleryCard3 } from './main/gallery-card3/gallery-card3.component';

@NgModule({
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    MenubarModule
  ],
  declarations: [MainViewComponent, LoginComponent, RegisterComponent, MainComponent, GalleryCard3],

  exports: [MainViewComponent, LoginComponent, RegisterComponent, MainComponent],
  providers: [MessageService],
})
export class MainViewModule { }
