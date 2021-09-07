import { Store } from '@ngrx/store';
import { DataServiceService } from './../../services/data-service.service';
import { Data, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { Prod } from 'src/assets/prod';
import * as CartActions from '../../store/actions/cart.actions'

@Component({
  selector: 'app-productdp',
  templateUrl: './productdp.component.html',
  styleUrls: ['./productdp.component.css']
})
export class ProductdpComponent implements OnInit {
  dataProd : any;
  prod_det : any;
  qtn = 1;


  constructor(private router: Router,
     private dataService: DataServiceService,
     private cartService: CartService,
     private store: Store) {

    const data = this.router.getCurrentNavigation();
    this.dataProd = data?.extras.state;
    console.log("state", this.dataProd)


   }

  ngOnInit(): void {
      this.dataService.getAll()
      .subscribe(
        (data: any) => {
          this.prod_det = data[this.dataProd.idx];
          console.log("Service Data:", this.prod_det);

          // this.prod_det['quantity'] = this.qtn;
          // this.prod_det['total'] = this.prod_det.price;

          console.log("Service Data with Price:", this.prod_det);
          console.log("Quantity cart: ",this.qtn);

        }
      )
  }

  addtocart(prod: Prod){
    this.prod_det['quantity'] = this.qtn;
    this.prod_det['total'] = this.prod_det.price * this.qtn;
    // this.cartService.addtCart(this.prod_det);
    this.store.dispatch(new CartActions.AddToCart(prod));

  }

  show(){
    console.log(this.qtn);

  }
}
