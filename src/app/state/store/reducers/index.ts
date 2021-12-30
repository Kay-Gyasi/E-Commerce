import { ActionReducerMap } from "@ngrx/store";
import { Item } from "src/app/models/item";
import { DashBoardState, ProductReducer } from "./dashboard.reducer";


export const rootReducer = {};

export interface AppState{
  products: DashBoardState;
}

export const reducers: ActionReducerMap<any, any> = {
  products: ProductReducer
}
