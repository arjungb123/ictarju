import { Component, OnInit } from '@angular/core';
import { Iproduct} from './product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers:[ProductService],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  showimage:boolean=false;
  products:Iproduct[];
  toggleImage():void{
    this.showimage=!this.showimage;
  }
  pageTitle:String="product list";
  

  constructor(private p:ProductService) {

   }

  ngOnInit():void {
    this.p.getproducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    });
  
  }}
