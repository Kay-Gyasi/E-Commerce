import { Item } from "src/app/models/item";
import { ProductAction, LoadProductAction } from "../actions/dashboard.action";
import { ECommerceActionType } from "../enums/enums";
import { InitialState } from "@ngrx/store/src/models";

export interface DashBoardState{
  list:Item[],
  loading:boolean,
  error:Error
}

export const initialState = {
  list:[],
  loading:false,
  error:Error()
}

export function ProductReducer(state:DashBoardState = initialState,
  action: ProductAction){
    switch(action.type){
      case ECommerceActionType.LOAD_PRODUCTS:
        return{
          ...state,
          loading:true
        };

      case ECommerceActionType.LOAD_PRODUCTS_SUCCESS:
        console.log(action.payload)
        return {
          ...state,
          list: action.payload,
          loading:false
        };

      case ECommerceActionType.LOAD_PRODUCTS_FAILURE:
        console.log('Error');
        return{
          ...state,
          loading:false,
          error:Error
        };

      default:
        return state;
    }
  }
