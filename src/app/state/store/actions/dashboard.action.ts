import {Action} from '@ngrx/store';
import { Item } from 'src/app/models/item';
import { ECommerceActionType } from '../enums/enums';

export class LoadProductAction implements Action{
  readonly type = ECommerceActionType.LOAD_PRODUCTS;
}

export class LoadProductSuccessAction implements Action{
  readonly type = ECommerceActionType.LOAD_PRODUCTS_SUCCESS;

  constructor(public payload:Item[]) {}
}

export class LoadProductFailureAction implements Action{
  readonly type = ECommerceActionType.LOAD_PRODUCTS_FAILURE;

  constructor(public error:Error) {}
}


export type ProductAction = LoadProductAction | LoadProductSuccessAction | LoadProductFailureAction;
