import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalItem: any = 0;

  prodList : any = [];

  grandTotal : number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(
      (data: any) => {
        this.prodList = data;
        this.grandTotal = this.cartService.getTotalPrice();
        console.log("Prod List: ", this.prodList);
        console.log("Total: ", this.grandTotal);
      }
    )
  }

  removeItem(prod: any){
    this.cartService.removeCartItem(prod);
  }

  emptyCart(){
    this.cartService.removeAll();
  }

  navigate(){
    this.router.navigate(['/categories']);
  }
}
