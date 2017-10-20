import { Component, OnInit } from '@angular/core';

import { AppActions } from '../state/app.actions';
import { AppDispatcher } from '../state/app.dispatcher';
import { CartStore } from './cart.store';
import { ProductInCart } from '../model/product';

@Component({
  selector: 'fl-cart-container',
  template: `
    <fl-cart
      [products]="products"
      [total]="total"
      (checkoutClicked)="onCheckoutClicked($event)"
    ></fl-cart>
  `
})
export class CartContainerComponent implements OnInit {
  private products: ProductInCart[];
  private total: string;

  constructor(private actions: AppActions,
              private dispatcher: AppDispatcher,
              private cartStore: CartStore) {}

  ngOnInit() {
    this.cartStore.getAddedProducts().subscribe((v) => this.products = v);
    this.cartStore.getTotal()        .subscribe((v) => this.total = v);
  }

  onCheckoutClicked(ev: MouseEvent) {
    if (!this.products.length) {
      return;
    }
    // this.dispatcher.emit(this.actions.cartCheckout(this.products));
  }
}
