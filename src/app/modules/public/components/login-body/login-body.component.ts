import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.css']
})
export class LoginBodyComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  

  openDialog() {
    let dialogRef = this.dialog.open( SignupComponent, {
      width: "550px",
      // height:"650px",
    
    });
  
  }

  ngOnInit() {
  }

}
