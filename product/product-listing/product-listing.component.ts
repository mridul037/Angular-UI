import { Component, OnInit, ViewContainerRef,ComponentFactoryResolver, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  public products =[];
  page: number = 0;
  productFetched: boolean
 // @ViewChild('div') div: ElementRef;

  //myHtml: string;
  //appendedHtml: string = '<div><b>this appended html</b></div>';
 



  constructor(private _productService: ProductService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
   this.getProducts();
  } 

  getProducts(){
    this._productService.getProducts(this.page).subscribe(data =>{
      this.productFetched=true
      this.products = this.products.concat(data['data'])
      console.log("dataa", data)
      })
    }
  
  
  onScrollDown() {
     this.page=this.page+1
     console.log('scrolled Down'+this.page);
     this.getProducts();
  }
}