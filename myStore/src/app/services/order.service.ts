import { Injectable } from '@angular/core';
import { Order } from './models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Order = {
    name: "",
    price: 0,
  }

  constructor() { }

  getOrder() {
    return this.order;
  }

  scheduleOrder(name: string, price: number){
    this.order.name = name;
    this.order.price = price
  }
}
