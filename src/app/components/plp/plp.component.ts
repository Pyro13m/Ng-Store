import { State, Store } from '@ngrx/store';
import { CartService } from './../../services/cart.service';
import { DataServiceService } from './../../services/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CartActions from '../../store/actions/cart.actions'

@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.css']
})
export class PlpComponent implements OnInit {

  prod_data : any;
  p: any
  searchInput = "";
  result : any;

  constructor(
    private dataService: DataServiceService,
    private router: Router,
    private cartService: CartService,
    private store: Store) { }

  ngOnInit(): void {
    this.dataService.getAll()
    .subscribe(
      (data:any) => {
        this.prod_data = data;
        console.log(this.prod_data);
      }
    )
  }

  navigate(data: number, prod: string){
    this.router.navigate(['/product-page/product-det/', prod],{
      state: {
        idx: data
      }
    })
  }

  addtocart(prod: any){
    prod['quantity'] = 1;
    prod['total'] = prod.price;
    this.store.dispatch(new CartActions.AddToCart(prod));
    console.log(prod);
  }

  // showAll(){

  // }'

  //  fetchSeries(event: any) {
  //   if (event.target.value === '') {
  //     return this.result;
  //   }
  //   else{
  //     this.result = this.prod_data.filter((data: any) => {
  //       return data.name.toLowerCase().startsWith(event.target.value.toLowerCase());
  //     })
  //   }

  // }

}
