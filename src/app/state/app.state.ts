import { Injectable } from '@angular/core';
import { State, Store } from 'walts';

import { AppDispatcher } from './app.dispatcher';
import { ProductInStock, ProductInCart } from '../model/product';

export class AppState extends State {
    products?: ProductInStock[];
    cart?: {
      [id: string]: ProductInCart
    };
  }
