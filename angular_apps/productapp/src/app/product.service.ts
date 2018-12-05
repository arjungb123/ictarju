import { Injectable } from '@angular/core';
import { Iproduct } from './components/product-list/product.model';
import {HttpClient,HttpResponse} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  getproducts(){
  return this.http.get("http://localhost:4000/products");
  }
  newProduct(item){
    return this.http.post("http://localhost:4000/insert",{"product":item})
    .subscribe(data=>{console.log(data)})
  }

  
}
