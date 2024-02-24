import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as singleSpa from 'single-spa';
import { updateState } from './store/store.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login';
  mainState: any = {};

  constructor(private store: Store) {}

  updateState() {
    this.store.dispatch(updateState({ name: "login" }));
    singleSpa.navigateToUrl('/example-spa/main');
  }

  getMainState() {
    if (localStorage.getItem('MAIN')) {
      this.mainState = localStorage.getItem('MAIN');
    }
  }
}
