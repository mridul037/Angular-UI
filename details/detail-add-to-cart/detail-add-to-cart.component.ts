import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-add-to-cart',
  templateUrl: './detail-add-to-cart.component.html',
  styleUrls: ['./detail-add-to-cart.component.scss']
})
export class DetailAddToCartComponent implements OnInit {
  @Input() atcData: object

  constructor() { }

  ngOnInit() {
  }

}
