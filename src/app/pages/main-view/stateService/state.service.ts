import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  private stateKey = 'mainViewState';

  getState(): string {
    return localStorage.getItem(this.stateKey) || 'main';
  }

  setState(state: string): void {
    localStorage.setItem(this.stateKey, state);
  }

}
