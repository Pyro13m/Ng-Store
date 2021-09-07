import { Action } from '@ngrx/store';
import { Prod } from 'src/assets/prod';


export enum CartActionTypes {
  LoadCarts = '[Cart] Load Carts',
  LoadCartsSuccess = '[Cart] Load Carts Success',
  LoadCartsFailure = '[Cart] Load Carts Failure',

  AddToCart = '[Cart] Add Cart',

  DeleteCartItem = '[Cart] Delete Item',
  DeleteCartItemSuccess = '[Cart] Delete Failure',
  DeleteCartItemFailure = '[Cart] Delete Success',

  DeleteCart = '[Cart] Delete Cart'
}

export class LoadCarts implements Action {
  readonly type = CartActionTypes.LoadCarts;
}

export class LoadCartsSuccess implements Action {
  readonly type = CartActionTypes.LoadCartsSuccess;
  constructor(public payload: { data: Prod[] }) { }
}

export class LoadCartsFailure implements Action {
  readonly type = CartActionTypes.LoadCartsFailure;
  constructor(public payload: { error: string }) { }
}

export class AddToCart implements Action {
  readonly type = CartActionTypes.AddToCart;
  constructor(public payload: Prod){}
}

export class deleteCartItem implements Action{
  readonly type = CartActionTypes.DeleteCartItem;
  constructor(public payload: number){};
}
export class deleteCartItemSuccess implements Action{
  readonly type = CartActionTypes.DeleteCartItemSuccess;
  constructor(public payload: number){};
}


export class deleteCart implements Action{
  readonly type = CartActionTypes.DeleteCart;
}


export type CartActions = LoadCarts |
LoadCartsSuccess |
LoadCartsFailure |
AddToCart |
deleteCartItem |
deleteCartItem |
deleteCart;

