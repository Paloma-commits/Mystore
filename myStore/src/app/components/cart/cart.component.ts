import { Component, OnInit, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  name: string;
  address: string;
  cardnum: string;

  constructor() { 
    this.name = "";
    this.address= "";
    this.cardnum= "";
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    alert()
  }


}
