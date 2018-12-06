import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputEmail :string;
  inputPassword:string;

  constructor() { }

  ngOnInit() {
     
  }
  onSubmit(){
    console.log("input email:"+this.inputEmail);
    console.log("input password:"+this.inputPassword);
  }

}
