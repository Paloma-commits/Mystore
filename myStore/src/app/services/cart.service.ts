import { Injectable } from '@angular/core';
import { Item } from './models/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart_list: Item[] = [];

  quantity: number = 0;

  constructor(private http: HttpClient) { }

  addtoCart(item: Item) {
    if (item.quantity === 0  || item.quantity === undefined) {
      alert("Looks like you did not select a quantity!")
      return;
    }
    //check to see if it is already in cart
    let itemIn = this.cart_list.filter(p => p.id === item.id);

    if(itemIn.length !== 0){
      let index = this.cart_list.findIndex(p => item.id === p.id);
      //let currentQ = Number(this.cart_list[index].quantity);

      let newQ = item.quantity;
      
      this.modifyQ(item.id, newQ);

      alert('Item quantity in cart updated!')
    }
    else{
      this.cart_list.push(item);
      alert('Item added to cart')
    }
  }

  getCart(){
    return this.cart_list;
  }

  removeItem(item:Item):void {
    var idx = this.cart_list.indexOf(item);

    if(idx != -1){
      this.cart_list.splice(idx, 1)
    }
  }

  calculateTotalCart(){
    let total = 0;
    
    for (let i = 0; i<this.cart_list.length; i++){
      total += this.cart_list[i].price * this.cart_list[i].quantity;
    }
    return total;
  }

  setQuantity(quant: any){
    this.quantity = Number(quant);
  }

  modifyQ(index: number, newQ: number){
    let idx: number = this.cart_list.findIndex(p => p.id === index)
    this.cart_list[idx].quantity = newQ;
  }

  updateQ(q:number, prod_id: number){
    let idx: number = this.cart_list.findIndex(p => p.id === prod_id);

    if(q != 0){
      this.cart_list[idx].quantity = q;
    }
  }
  
}
