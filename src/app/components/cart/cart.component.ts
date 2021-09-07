import { State } from './../../store/reducers/index';
// import { DeleteCartSuccess } from './../../actions/cart.actions';
import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as CartActions from '../../store/actions/cart.actions'
import * as fromCart from '../../store/selectors/cart.selectors'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalItem: any = 0;

  prodList : any = [];

  grandTotal : number = 0;

  constructor(private cartService: CartService, private router: Router, private store: Store<State>) { }

  ngOnInit(): void {
    // this.store.dispatch(new CartActions.LoadCarts()); //action dispatched

    this.store.pipe(select(fromCart.getCart)).subscribe(
      (data: any) => {
        this.grandTotal = 0;
        console.log("Data in store: ", data);
        this.prodList = data;
        // this.grandTotal = this.cartService.getTotalPrice();
        for(var i=0;i<data.length;i++){
          this.grandTotal += data[i].total;
        }
        console.log("Prod List: ", this.prodList);
        console.log("Total: ", this.grandTotal);
      }
    )
    // store is an observable

    // this.cartService.getProducts()
    // .subscribe(
    //   (data: any) => {
    //     this.prodList = data;
    //     this.grandTotal = this.cartService.getTotalPrice();
    //     console.log("Prod List: ", this.prodList);
    //     console.log("Total: ", this.grandTotal);
    //   }
    // )

  }

  removeItem(prod: number){
    if(confirm("Are you sure you you want to remove the product?")){
      // this.cartService.removeCartItem(prod);
      this.store.dispatch(new CartActions.deleteCartItem(prod));
    }

    // this.store.dispatch(new .DeleteCartSuccess(prod))
  }

  emptyCart(){
    if(confirm("Do you want to empty your cart?")){
    // this.cartService.removeAll();
      this.store.dispatch(new CartActions.deleteCart);
    }
  }

  navigate(){
    this.router.navigate(['/categories']);
  }
}
