import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EmptyError, observable, Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as cartActions from '../actions/cart.actions';
import { CartService } from '../../services/cart.service';
import { mergeMap, map, catchError, exhaustMap } from 'rxjs/operators'

@Injectable()
export class CartEffects {

  constructor(private actions$: Actions, private cartService: CartService) {}

  loadCart$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(cartActions.CartActionTypes.LoadCarts),
    mergeMap(
      action => this.cartService.getProducts().pipe(
        map(items => (new cartActions.LoadCartsSuccess({data: items}))),
        catchError(err => of(new cartActions.LoadCartsFailure({error: err})))
        )
     )

    )
  )
}
