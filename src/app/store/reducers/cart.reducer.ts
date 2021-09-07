import { CartActions, CartActionTypes, deleteCart } from './../actions/cart.actions';
// import { Action, props } from '@ngrx/store';
import { Prod } from 'src/assets/prod';


export const cartFeatureKey = 'cartState';

export interface State {
  items: Prod[],
  error: string
}

export const initialState: State = {
  items: [],
  error: ''
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

    case CartActionTypes.AddToCart:
      console.log("Added to Cart");
      const addedList = state.items.concat(action.payload);

      // console.log("Added List: ", addedList);

      return{
        items: addedList,
        error: ''
      }


    case CartActionTypes.DeleteCartItem:
      // console.log("Hello!!!!!!!!");
      const updatedList: Prod[] = state.items.filter(item => {
        return item.id !== action.payload;
      })
      return{
        // ...state,
        items: updatedList,
        error: ''
      }

    case CartActionTypes.DeleteCart:
      const _updatedList: Prod[] = [];
      return{
        // ...state,
        items: _updatedList,
        error: ''
      }

    default:
      return state;
  }
}
