import { Component, OnInit } from '@angular/core';
import { BagService } from '../bag.service'

@Component({
  selector: 'app-bag-container',
  templateUrl: './bag-container.component.html',
  styleUrls: ['./bag-container.component.scss']
})
export class BagContainerComponent implements OnInit {
  bagData = {}
  bagDataFetched:boolean

  constructor(private bagService: BagService) { }

  ngOnInit() {
    this.bagService.getBagData().subscribe(bagData => {
      this.bagDataFetched=true;
      this.bagData=bagData
    })
  }


}
