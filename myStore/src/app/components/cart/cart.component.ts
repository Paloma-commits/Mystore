import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/services/models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  name: string = "";
  address: string = "";
  cardnum: string = "";

  currentOrder: Order = {
    name: '',
    price: 0
  };

  constructor(private OrderService: OrderService, private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.currentOrder.name = this.name;
    this.OrderService.scheduleOrder(this.currentOrder.name, this.currentOrder.price);
    this.router.navigate(['cart/confirmation']);
  }


}
