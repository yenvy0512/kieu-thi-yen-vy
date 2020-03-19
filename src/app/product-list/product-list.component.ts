import { Component, OnInit,Input } from '@angular/core';
import{Product} from '../Product';
import { NgModel } from '@angular/forms';
import{Data} from '../MockData'
// import{ProductService}from '../product.service'
@Component({

  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input('data') product: Product;
  constructor(
     // privice productService: ProductService
  ) 
  // console.log('contructor')
  { 
   
  }

  ngOnInit(): void {
    // this.getProducts();
  }

products=Data;

selected: Product;


changeStatus(){
// this.product.status=!this.product.status;
}
changeName(e){
  // this.product.name=e.target.value

}
removeItem(id: number){
  // this.products=this.products.filter(product => product.id !=id);


}
showDetail(product){
this.selected=product;
console.log(this.selected);
}
}
