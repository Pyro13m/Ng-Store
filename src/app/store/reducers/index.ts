import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCart from './cart.reducer';


export interface State {

  [fromCart.cartFeatureKey]: fromCart.State;
}

export const reducers: ActionReducerMap<State, any> = {

  [fromCart.cartFeatureKey]: fromCart.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
