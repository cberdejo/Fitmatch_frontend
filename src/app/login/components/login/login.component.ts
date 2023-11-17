import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { StateService } from '../../service/stateService/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @Output () onLogin = new EventEmitter();
  //Form
  profileForm: FormGroup = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]),
    password: new FormControl('',[Validators.required,]),
   
  });

  get email() { return this.profileForm.controls['email']; }
  get password() { return this.profileForm.controls['password']; }

  
  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

  
  //Funciones
  goToRegister(){
    this.stateService.setState('register');
  }

  goToMain(){
    this.stateService.setState('main');
  }

}
