import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList : any = [];
  productList = new BehaviorSubject<any>([]); //behaviourSubject can emit and also be subscribed to

  constructor() { }

  //methods
  getProducts(){
    return this.productList.asObservable(); //whoever calls this method can subscribe to the data
  }

  setProduct(product: any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice() : number{
    let total = 0;
    this.cartItemList.map((a: any)=>{
      total += a.total;
    })
    return total;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a: any,index: any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAll(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    this.productList.next(this.cartItemList);
  }

}
