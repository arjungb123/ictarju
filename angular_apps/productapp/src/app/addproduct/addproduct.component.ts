import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Iproduct } from '../components/product-list/product.model';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private pserve:ProductService) { }
  productitem=new Iproduct(null,null,null,null,null,null,null,null);


  ngOnInit() {
  }
  addproduct()
  {
    this.pserve.newProduct(this.productitem);
    alert("success");
  }

}
