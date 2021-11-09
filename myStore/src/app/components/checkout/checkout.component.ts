import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/services/models/order';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  name: string = "";
  address: string = "";
  cardnum: string = "";

  currentOrder: Order = {
    name: '',
    price: 0
  };
  constructor(private router: Router, private OrderService: OrderService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.currentOrder.name = this.name;
    this.OrderService.scheduleOrder(this.currentOrder.name, this.currentOrder.price);
    this.router.navigate(['cart/checkout/confirmation']);
  }
}
