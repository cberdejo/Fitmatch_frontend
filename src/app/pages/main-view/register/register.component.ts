import { Component, OnInit,  Output, EventEmitter, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { StateService } from '../stateService/state.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
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

  //Validador que comprueba que la fecha es de al menos 16 años
  fechaNacimientoValidator(control: AbstractControl): { [key: string]: boolean } | null {
    // Verifica si la fecha es válida y la persona tiene al menos 16 años
    const fechaNacimiento = new Date(control.value);
    const edadMinima = 16;
    const hoy = new Date();

    if (
      isNaN(fechaNacimiento.getTime()) ||  // Verifica si la fecha es válida
      hoy.getFullYear() - fechaNacimiento.getFullYear() < edadMinima
    ) {
      return { 'fechaNacimientoInvalida': true };
    }

    return null;
  }

  //Form
  profileForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    email : new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]),
    nacimiento: new FormControl(undefined, [Validators.required,  this.fechaNacimientoValidator]),
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

  //fechas maximas y minimas para el calendario
  minDate = new Date(1900, 0, 1);
  maxDate = new Date();

  //fase del registro
  fase = signal < 1 | 2 | 3  > (1);
   
 //steps

  steps = [
    {
      label: 'Información personal',
     
    },
    {
      label: 'Confirmación del correo',
          
    },
    {
      label: 'Preferencias',
      command: () => {
        
      },

    }
  ]

   


  constructor(
    private stateService: StateService,
    private messageService: MessageService
  ) { }

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
    this.stateService.setState('login');
  }

  goToMain(){
    this.stateService.setState('main');
  }

  goToFase1(){
    this.fase.set(1);
  }
  goToFase2(){
    if (this.profileForm.valid){
      this.fase.set(2);
    }else{
      this.messageService.add({
        severity: 'error',
        summary: 'Oops!',
        detail: 'Asegurese de rellenar los datos del formulario correctamente.',
       
      }); 
      
    }
    
  }
  goToFase3(){
   this.fase.set(3);
  }

}
