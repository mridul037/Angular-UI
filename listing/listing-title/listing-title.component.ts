import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listing-title',
  templateUrl: './listing-title.component.html',
  styleUrls: ['./listing-title.component.scss']
})
export class ListingTitleComponent implements OnInit {
  @Input() listingTitleData: object;

  constructor() { }

  ngOnInit() {
  }

}
