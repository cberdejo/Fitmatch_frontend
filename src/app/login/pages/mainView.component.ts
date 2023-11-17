import { Component, OnInit, signal } from '@angular/core';
import { StateService } from 'src/app/login/service/stateService/state.service';
@Component({ 
  selector: 'app-mainView',
  templateUrl: './mainView.component.html',
  styleUrls: ['./mainView.component.css']
})
export class MainViewComponent implements OnInit {

  constructor(private stateService: StateService) { }
  
  get state (){ 
    return this.stateService.getState();
  }

  ngOnInit() {
  }

  goToRegister(){
    this.stateService.setState('register');
  }

  goToLogin(){
    this.stateService.setState('login');
  }

  onRegister(eventData: any) {
    
  }

  onLogin(eventData: any){
    
  }

}
