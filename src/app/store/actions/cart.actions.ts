// import { DeleteCartSuccess } from './cart.actions';
import { Action } from '@ngrx/store';
import { Prod } from 'src/assets/prod';
import { createAction,props } from '@ngrx/store';


export enum CartActionTypes {
  LoadCarts = '[Cart] Load Carts',
  LoadCartsSuccess = '[Cart] Load Carts Success',
  LoadCartsFailure = '[Cart] Load Carts Failure',
  // DeleteCartsSuccess = '[Cart] Delete Carts Success'
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

// export class DeleteCartsSuccess implements Action {
//   readonly type = CartActionTypes.DeleteCartsSuccess;
//   constructor(public payload: { data: any }) { }
// }

// export const DeleteCartSuccess = createAction(
//   '[Cart] Delete Cart Sucssess',
//   props<{data: any}>()
// )
export type CartActions = LoadCarts | LoadCartsSuccess | LoadCartsFailure;

