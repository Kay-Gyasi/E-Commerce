import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Item } from 'src/app/models/item';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() property:Cart;

  constructor(private alertify:AlertifyService) { }

  quantityNum = 1;

  ngOnInit() {
  }

  addToCart(item:Item){
    if(this.isLoggedin()){
      let cart = [];
      if(localStorage.getItem('Cart')) {
        cart = JSON.parse(localStorage.getItem('Cart') || '{}');
        cart = [item, ...cart];
      } else{
        cart = [item];
      }
      localStorage.setItem('Cart', JSON.stringify(cart));
    }
    else{
      this.alertify.failed("Please login to use this service")
    }
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

  isLoggedin(){
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }
}
