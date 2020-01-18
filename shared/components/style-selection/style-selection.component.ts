import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-style-selection',
  templateUrl: './style-selection.component.html',
  styleUrls: ['./style-selection.component.scss']
})
export class StyleSelectionComponent implements OnInit {
  @Input() intermediateData: object;
  data

  constructor() { }

  ngOnInit() {
    this.data = this.intermediateData["styles"]
  }

}
