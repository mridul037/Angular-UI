import { Component, OnInit } from '@angular/core';
import { CategoriesListService } from '../categories-list.service'

@Component({
  selector: 'app-categories-container',
  templateUrl: './categories-container.component.html',
  styleUrls: ['./categories-container.component.scss']
})
export class CategoriesContainerComponent implements OnInit {
  categoriesListData = {}
  categoriesListFetched:boolean

  constructor(private categoriesListService: CategoriesListService) { }

  ngOnInit() {
    this.categoriesListService.getCategoriesList().subscribe(CategoriesList => {
      this.categoriesListFetched=true
      this.categoriesListData=CategoriesList['data']
    })
  }


}
