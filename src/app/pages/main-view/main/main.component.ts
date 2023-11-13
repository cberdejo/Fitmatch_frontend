import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input () state:any;

  constructor() { }

  ngOnInit() {
  }
  goToLogin(){
    this.state.set('login');
  }

  goToRegister(){
    this.state.set('register');
  }

}
