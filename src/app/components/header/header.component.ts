import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItems = 0;
  public totalPrice = 0;
  constructor(private router: Router, private cartService: CartService) {
    this.cartService.getProducts()
    .subscribe(res =>{
      this.totalItems = res.length;
      this.totalPrice = 0;
      for(let i=0;i<res.length;i++){
        this.totalPrice += res[i].total;
      }
      console.log("tot price: ",this.totalPrice);

      console.log("len: ", this.totalItems);
    })
  }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['/cart'])
    // console.log("len: ", this.totalItems);
  }

}
