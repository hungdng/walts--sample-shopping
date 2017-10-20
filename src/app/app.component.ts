import { Component, OnInit } from '@angular/core';

import { AppActions } from './state/app.actions';
import { AppDispatcher } from './state/app.dispatcher';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private actions: AppActions,
    private dispatcher: AppDispatcher) {}

    ngOnInit() {
      this.dispatcher.emit(this.actions.fetchAllProducts());
    }
}
