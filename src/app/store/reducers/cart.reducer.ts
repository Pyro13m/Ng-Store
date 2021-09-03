import { CartActions, CartActionTypes } from './../actions/cart.actions';
// import { Action, props } from '@ngrx/store';
import { Prod } from 'src/assets/prod';


export const cartFeatureKey = 'cartState';

export interface State {
  items: Prod[],
  error: string,
  idx: number
}

export const initialState: State = {
  items: [],
  error: '',
  idx: -1
};

export function reducer(state = initialState, action: CartActions): State {
  switch (action.type) {

    case CartActionTypes.LoadCarts:
      return{
        ...state
      }
    case CartActionTypes.LoadCartsSuccess:
      return{
        ...state,
        items: action.payload.data,
        error: ''
      }

    case CartActionTypes.LoadCartsFailure:
      return{
        ...state,
        items: [],
        error: action.payload.error
      }

    // case DeleteCartSuccess:
    //   return{
    //     ...state,
    //     idx:

    //   }

    default:
      return state;
  }
}
