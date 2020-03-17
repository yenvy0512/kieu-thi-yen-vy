import { Component, OnInit } from '@angular/core';
import{Product} from '../Product';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// name: String ='Item One';
// price: number=24.99;
// desc: String='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur';
// status: boolean=false;
product: Product={
  id: 1,
  name: "1",
  price: 24,
  desc:'Lorme',
  status:false,
  img:''


}
changeStatus(){
this.product.status=!this.product.status;
}
changeName(e){
  this.product.name=e.target.value;

}
}
