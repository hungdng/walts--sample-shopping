import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartContainerComponent } from './cart/cart-container.component';
import { ProductItemComponent } from './product/product-item.component';
import { ProductItemContainerComponent } from './product/product-item-container.component';
import { ProductsContainerComponent } from './product/products-container.component';
import { ProductsListComponent } from './product/products-list.component';

import { AppActions } from './state/app.actions';
import { AppDispatcher } from './state/app.dispatcher';
import { AppStore } from './state/app.store';
import { CartStore } from './cart/cart.store';
import { ProductStore } from './product/product.store';
import { WebAPIUtils } from './comon/utils/web-api-utils-service';
import { ShopAPI } from './comon/utils/shop-api.service';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartContainerComponent,
    ProductItemComponent,
    ProductItemContainerComponent,
    ProductsContainerComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AppActions,
    AppDispatcher,
    AppStore,
    CartStore,
    ProductStore,
    WebAPIUtils,
    ShopAPI
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
