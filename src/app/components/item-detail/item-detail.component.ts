import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.itemNum = this.route.snapshot.params['id'];
  }

  itemNum:Number;
}
