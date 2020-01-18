import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bag-details',
  templateUrl: './bag-details.component.html',
  styleUrls: ['./bag-details.component.scss']
})
export class BagDetailsComponent implements OnInit {
  @Input() bagData: object;
  data
  selected
  constructor() { }

  ngOnInit() {
    this.data=this.bagData['data']
  }
  cartShowQty() {
		const c = 10;
		const quantity = [];
		for (let i = 1; i <= c; i++) {
			quantity.push(i);
		}
		return quantity;
	}

}
