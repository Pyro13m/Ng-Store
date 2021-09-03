import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from '../reducers/cart.reducer';


const getCartFeatureState = createFeatureSelector<State>('cartState');

//selector for getCart
export const getCart = createSelector(
  getCartFeatureState,
  state => state.items
)

//selector for getError
export const getError = createSelector(
  getCartFeatureState,
  state => state.error
)
