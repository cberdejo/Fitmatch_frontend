import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
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
import { ProgressSpinnerModule } from 'primeng/progressspinner';


import { MainViewComponent } from './mainView.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { MainComponent } from '../components/main/main.component';
import { MatchingComponent } from 'src/app/shared/components/matching/matching.component';
import { GalleryCard3 } from '../components/gallery-card3/gallery-card3.component';
import { EmailVerificationComponent } from '../../shared/components/emailVerification/emailVerification.component';

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
    StepsModule,
    ProgressSpinnerModule,
    HttpClientModule
  ],
  declarations: [
    MainViewComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    GalleryCard3,
    MainComponent,
    MatchingComponent,
    EmailVerificationComponent,
  ],


  exports: [MainViewComponent],
  providers: [MessageService],
})
export class MainViewModule { }
