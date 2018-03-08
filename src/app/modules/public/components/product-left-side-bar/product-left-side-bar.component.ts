import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-left-side-bar',
  templateUrl: './product-left-side-bar.component.html',
  styleUrls: ['./product-left-side-bar.component.css']
})
export class ProductLeftSideBarComponent implements OnInit {

  step;
  stepOne: boolean = true;
  stepTwo: boolean = true;
  stepThree: boolean = true;
  stepThreeOne: boolean = true;
  stepFour: boolean = true;

  constructor( ) { }

  menuDashboard() {
    this.stepOne = true;
    this.stepTwo = false;
    this.stepThree = false;
    this.stepThreeOne = false;
    this.stepFour = false;   
  }
  menuOrder() {
    this.stepTwo = true;
    this.stepThree = false;
    this.stepThreeOne = false;
    this.stepFour = false;
    this.stepOne = false;
  }
  menuQuotation() {
    this.stepThree = true;
    this.stepThreeOne = false;
    this.stepFour = false;
    this.stepOne = false;  
    this.stepTwo = false;
  }
  menuNewQuotation(){
    this.stepThreeOne = true;
    this.stepFour = false;
    this.stepOne = false;
    this.stepTwo = false;
    this.stepThree = false;
  }
  menuCustom() {
    this.stepFour = true;
    this.stepOne = false;
    this.stepTwo = false;
    this.stepThree = false;
    this.stepThreeOne = false;
  }
  ngOnInit() {
  }

}
