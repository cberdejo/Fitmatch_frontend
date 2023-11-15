import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input () state:any;
  @Output() onRegister = new EventEmitter();

   //Validador que comprueba que las contraseñas son iguales
  equivalentValidator = (firstControlName: string, secondControlName: string): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const firstControl = control.get(firstControlName);
      const secondControl = control.get(secondControlName);
  
      if (secondControl && (secondControl.value !== firstControl?.value)) {
        return { notEqual: true };
      }
  
      return null;
    };
  };

  //Form
  profileForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    email : new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]),
    nacimiento: new FormControl(new Date("2000-01-01T00:00:00Z"), Validators.required),
    telefono: new FormControl('',[ Validators.pattern("^[0-9]{3}-[0-9]{3}-[0-9]{3}$")] ),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),   //longitud mínima
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*/) //al menos una letra mayúscula, una letra minúscula y un número
    ]),
   
    password2: new FormControl('',[
      Validators.required,
      Validators.minLength(8),  
    ]), 
    
   
  },{

    validators:[ this.equivalentValidator('password', 'password2')]
   
  });



  constructor() { }

  ngOnInit() {
  }

  //Getters
  get email() { return this.profileForm.controls['email']; }
  get username() { return this.profileForm.controls['username']; }
  get nacimiento() { return this.profileForm.controls['nacimiento']; }
  get telefono() { return this.profileForm.controls['telefono']; }
  get password() { return this.profileForm.controls['password']; }
  get password2() { return this.profileForm.controls['password2']; }

  //Funciones
  goToLogin(){
    this.state.set('login');
  }

  goToMain(){
    this.state.set('main');
  }

}
