import { State } from './../../store/reducers/index';
import { Store, select } from '@ngrx/store';

import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CartActions from '../../store/actions/cart.actions'
import * as fromCart from '../../store/selectors/cart.selectors'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarOpen : boolean = false;
  public totalItems = 0;
  public totalPrice = 0;
  constructor(private router: Router, private cartService: CartService,
   private store: Store<State>) {
    // this.cartService.getProducts()
    // .subscribe(res =>{
    //   this.totalItems = res.length;
    //   this.totalPrice = 0;
    //   for(let i=0;i<res.length;i++){
    //     this.totalPrice += res[i].total;
    //   }
    //   console.log("tot price: ",this.totalPrice);

    //   console.log("len: ", this.totalItems);
    // })

    this.store.dispatch(new CartActions.LoadCarts()); //action dispatched

    this.store.pipe(select(fromCart.getCart)).subscribe(
      (data: any) => {
        this.totalItems = data.length;
        this.totalPrice = 0;
        for(let i=0;i<data.length;i++){
        this.totalPrice += data[i].total;
        }
      }
    )
  }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['/cart'])
    // console.log("len: ", this.totalItems);
  }

  toggle(){
    this.navbarOpen = !this.navbarOpen;
  }

  show(){
    this.navbarOpen = !this.navbarOpen;
  }
}
