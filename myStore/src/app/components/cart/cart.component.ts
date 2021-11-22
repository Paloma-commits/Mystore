import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/services/models/order';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/services/models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: Item[] = []

  itemstotal = 0;

  constructor(private OrderService: OrderService, private router: Router, private CartService: CartService) { 
    
  }

  ngOnInit(): void {
    this.cartList = this.CartService.getCart();
    this.itemstotal = this.CartService.calculateTotalCart();


  }

  checkout() {
    this.router.navigate(['cart/checkout']);
  }

  getNewItemsTotal() {
    this.itemstotal = this.CartService.calculateTotalCart();
  }
  
}
