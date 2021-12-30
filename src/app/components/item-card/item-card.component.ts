import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() property:Cart;

  constructor() { }

  quantityNum = 1;

  ngOnInit() {
  }

  addToCart(item:Item){
    let cart = [];
    if(localStorage.getItem('Cart')) {
      cart = JSON.parse(localStorage.getItem('Cart') || '{}');
      cart = [item, ...cart];
    } else{
      cart = [item];
    }
    localStorage.setItem('Cart', JSON.stringify(cart));
  }

  removeFromCart(){
    let cart = [];

    if(localStorage.getItem('Cart')){
      cart = JSON.parse(localStorage.getItem('Cart') || '{}');

      const item = cart.filter((item: { productID: number; }) => item.productID !== this.property.productID);

      cart = item;

      localStorage.setItem('Cart', JSON.stringify(cart));
    }
  }

  isAddedToCart(){
    let cart = [];

    if(localStorage.getItem('Cart')){
      cart = JSON.parse(localStorage.getItem('Cart') || '{}');

      //const item = cart.filter((item: { id: number; }) => item.id == this.property.id);

      for(const id in cart){
        if(cart[id].productID == this.property.productID){
          return true;
        }
      }
    }
    return false;
  }

  isShoe(){
    if(this.property.categoryName == "Sneaker"){
      return true;
    }
    return false;
  }
}
