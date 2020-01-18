import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-offer',
  templateUrl: './detail-offer.component.html',
  styleUrls: ['./detail-offer.component.scss']
})
export class DetailOfferComponent implements OnInit {
  @Input() offerData: object

  constructor() { }

  ngOnInit() {
  }

}
