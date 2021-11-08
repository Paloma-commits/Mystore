import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/services/models/order';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  @Input() name:string;
  currentOrder: Order = {
    name: "",
    price: 0,
  }

  constructor(private OrderService: OrderService) { 
    this.name = '';
  }

  ngOnInit(): void {
    this.currentOrder = this.OrderService.getOrder();
  }

}
