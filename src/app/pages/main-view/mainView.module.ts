import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FieldsetModule } from 'primeng/fieldset';
import { StepsModule } from 'primeng/steps';

import { MainViewComponent } from './mainView.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { MatchingComponent } from 'src/app/components/matching/matching.component';
import { GalleryCard3 } from './main/gallery-card3/gallery-card3.component';

@NgModule({
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    CalendarModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    FieldsetModule,
    StepsModule
  ],
  declarations: [MainViewComponent, LoginComponent, RegisterComponent, MainComponent, GalleryCard3, MainComponent, MatchingComponent],

  exports: [MainViewComponent],
  providers: [MessageService],
})
export class MainViewModule { }
