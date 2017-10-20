import { Component, OnInit } from '@angular/core';

import { ProductStore } from './product.store';
import { Product } from '../model/product';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fl-products-container',
  template: `
    <fl-products-list
      [title]="'Flux Shop Demo (Walts)'"
      [products]= "products"
    ></fl-products-list>
  `
})
export class ProductsContainerComponent implements OnInit {
  private products: Product[];

  constructor(private productStore: ProductStore) {}

  ngOnInit() {
    this.productStore.getAllProducts().subscribe((v) => this.products = v);
  }
}
