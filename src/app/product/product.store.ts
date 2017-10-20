import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppStore } from '../state/app.store';
import { Product } from '../model/product';

@Injectable()
export class ProductStore {
  constructor(protected store: AppStore) {}

  getAllProducts(): Observable<Product[]> {
    return this.store.observable.map((state) => {
      return state.products;
    });
  }
}
