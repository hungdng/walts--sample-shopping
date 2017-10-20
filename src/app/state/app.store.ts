import { Injectable } from '@angular/core';
import { State, Store } from 'walts';

import { AppDispatcher } from './app.dispatcher';
import { AppState } from './app.state';
import { ProductInStock, ProductInCart } from '../model/product';

const INIT_STATE: AppState = {
  products: [],
  cart: {}
};

@Injectable()
export class AppStore extends Store<AppState> {
  constructor(protected dispatcher: AppDispatcher) {
    super(INIT_STATE, dispatcher);
  }
}
