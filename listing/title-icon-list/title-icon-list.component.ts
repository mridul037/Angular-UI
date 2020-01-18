import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-icon-list',
  templateUrl: './title-icon-list.component.html',
  styleUrls: ['./title-icon-list.component.scss']
})
export class TitleIconListComponent implements OnInit {
  @Input() titleIconListData : object

  constructor() { }

  ngOnInit() {
  }

}
