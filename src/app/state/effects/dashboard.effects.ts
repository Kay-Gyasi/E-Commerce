import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, mergeMap, map } from "rxjs/operators";
import { LoadProductAction, LoadProductFailureAction, LoadProductSuccessAction } from "../store/actions/dashboard.action";
import { ECommerceActionType } from "../store/enums/enums";
import { ItemsService } from "src/app/services/items.service";
import { of } from "rxjs";


@Injectable()
export class ProductEffects{
  constructor(private actions$:Actions, private service:ItemsService) {
  }


  loadProducts$ = createEffect(() => this.actions$
  .pipe(
    ofType<LoadProductAction>(ECommerceActionType.LOAD_PRODUCTS),
    mergeMap(
      () => this.service.getItems()
      .pipe(
        map(data => new LoadProductSuccessAction(data)),
        catchError(error => of(new LoadProductFailureAction(error)))
      )
    )
  ));

  item:string = 'Sneaker';
}
