import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.scss']
})
export class StaticPageComponent implements OnInit {
  monthVal: any;
  monthInc: any;
  values = [
    {value: '1 Month', viewValue: '1 Month'},
    {value: '3 Months', viewValue: '3 Months'},
    {value: '6 Months', viewValue: '6 Months'}
  ];
  vals: any;


  constructor() { }

  ngOnInit(): void {
    this.monthVal = 200000;
    this.monthInc = 20000;
    this.vals = '6 Months'
  }


  itChanged(value){
console.log(value);
this.monthVal = value;
  }

  itChanged2(value){
    console.log(value);
    this.monthInc = value;
      }

}
