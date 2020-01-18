import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listing-styles',
  templateUrl: './listing-styles.component.html',
  styleUrls: ['./listing-styles.component.scss']
})
export class ListingStylesComponent implements OnInit {
  @Input() intermediateData: object;
  data

  constructor() { }

  ngOnInit() {
  }

}
