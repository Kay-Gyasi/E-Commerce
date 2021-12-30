import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Item } from 'src/app/models/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router:Router) { }

  cart:Item[] = [];

  quantityNum = 1;

  total:number = 1;

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('Cart') || '{}');

    for(const id in this.cart){
      this.total += (this.cart[id].price * this.quantityNum);
    }
  }

  pay(){
    this.router.navigate(['/pay']);
  }
}
