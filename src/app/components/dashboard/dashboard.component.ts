import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/store/reducers';
import { map, Observable } from 'rxjs';
import { LoadProductAction } from 'src/app/state/store/actions/dashboard.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  properties$:Observable<Array<Item>>;

  props:Array<Item>;

  loading$: Observable<Boolean>;

  error$: Observable<Error>;

  category = "Sneaker";

  constructor(private service:ItemsService, private route:ActivatedRoute,
    private store:Store<AppState>) { }

  ngOnInit() {
    if(this.route.snapshot.url.toString()){
      this.category = "Sandals";
    }
    /* this.service.getItems().subscribe(data => {
      console.log(data),
      this.properties = data;
    }) */

    this.properties$ = this.store.select((store) => store.products.list).pipe(
      map(data => data.filter(x => x.categoryName === this.category))
    );

    this.loading$ = this.store.select((store) => store.products.loading);
    this.error$ = this.store.select((store) => store.products.error);

    this.store.dispatch(new LoadProductAction());
  }

}
