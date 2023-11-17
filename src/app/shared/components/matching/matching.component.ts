import { Component, OnInit, Output , EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {

  @Output() onMandarInfo = new EventEmitter<any>(); //para mandar la informacion del formulario
  @Input() label: string = "Siguiente"; //Con que etiqueta se va a mostrar el boton

  //categorias disponibles en los radio buttons sobre la experiencia
  categoriesExperience: any[] = [
    { name: 'Principiante', key: 'P' },
    { name: 'Intermedio', key: 'I' },
    { name: 'Avanzado', key: 'A' },
  ];

  selectedCategoryExperience:any = null; 

  //categorias disponibles en checkboxes sobre objetivos
  categoriesObjetivos: any[] = [
    { name: 'Pérdida de peso', key: 'P' },
    { name: 'Ganancia muscular', key: 'G' },
    { name: 'Resistencia cardiovascular', key: 'R' },
    { name: 'Flexibilidad y movilidad', key: 'F' },
    { name: 'Salud', key: 'S' },
    { name: 'Rehabilitación', key: 'RE' },
    { name: 'Otros', key: 'O' },
  ];



  //categorias disponibles en checkboxes sobre Interéses
  categoriesIntereses: any [] = [
    { name: 'Culturismo', key: 'C'},
    { name: 'Artes marciales', key: 'A'},
    { name: 'Boxeo', key: 'B'},
    { name: 'Ciclismo', key: 'CI'},
    { name: 'Gimnasia', key: 'G'},
    { name: 'Natacion', key: 'N'},
    { name: 'Halterofilia', key: 'H'},
    { name: 'Pilates', key: 'P'},
    { name: 'Strongman', key: 'S'},
    { name: 'Yoga', key: 'Y'},
    { name: 'Zumba', key: 'Z'},
    { name: 'Calistenia', key: 'CA'},
    { name: 'Otros', key: 'O'}
  ]

 

  //HACER FORM
  validForm = false;
  selectedCategoryObjetivos:any[] = [];
  selectedCategoryIntereses:any[] = [];

  constructor() { }



  ngOnInit() {
    this.selectedCategoryExperience = this.categoriesExperience[1];
  }


  mandarInfo(){
    this.onMandarInfo.emit({
      experience: this.selectedCategoryExperience,
      objetivos: this.selectedCategoryObjetivos,
      intereses: this.selectedCategoryIntereses
    });
  }
  
}
