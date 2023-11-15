import { Component, OnInit, signal } from '@angular/core';

@Component({ 
  selector: 'app-mainView',
  templateUrl: './mainView.component.html',
  styleUrls: ['./mainView.component.css']
})
export class MainViewComponent implements OnInit {

  constructor() { }
  state = signal<'main' | 'login' | 'register'>('main');
  ngOnInit() {
  }
  onRegister(eventData: any) {

  }

  onLogin(eventData: any){
    
  }

}
