import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apphome',
  templateUrl: './apphome.component.html',
  styleUrls: ['./apphome.component.css']
})
export class ApphomeComponent implements OnInit {
  title:string ="my home page";
  name:string ="arjun";
  products:any[]=[
    {
      "productid":1,
      "productname":"bag",
      "productcode":"abc-011"
    },
    {
      "productid":2,
      "productname":"book",
      "productcode":"bc-012"
    },
    {
      "productid":3,
      "productname":"pencil",
      "productcode":"pc-0113"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
