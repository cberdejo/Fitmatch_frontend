import { Component, OnInit } from '@angular/core';
import { StateService } from '../stateService/state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {



  constructor(private stateService: StateService) { }



  ngOnInit() {
  }
  goToLogin(){
    this.stateService.setState('login');
  }

  goToRegister(){
    this.stateService.setState('register');
  }
}

