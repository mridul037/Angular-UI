import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-style-selector',
  templateUrl: './detail-style-selector.component.html',
  styleUrls: ['./detail-style-selector.component.scss']
})
export class DetailStyleSelectorComponent implements OnInit {
  @Input() pdpStyleData: object
  constructor() { }

  ngOnInit() {
  }

}
