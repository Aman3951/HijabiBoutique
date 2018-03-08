import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<SignupComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: string) 
     {   }

  ngOnInit() {
  }

}
