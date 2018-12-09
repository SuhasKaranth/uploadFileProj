import { Component, OnInit } from '@angular/core';
import { LoginRequest } from './models/login.request'
import { LoginResponse } from './models/login.response';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputEmail :string;
  inputPassword:string;
  loginRequest:LoginRequest;
  loginResponse:LoginResponse;
  showInvlaidCredAlert:boolean=false;
  alertMessage:string;

  constructor(private dataService : DataService, private router: Router) { }

  ngOnInit() {
     
  }
  onSubmit(){
    console.log("input email:"+this.inputEmail);
    console.log("input password:"+this.inputPassword);

    this.loginRequest = new LoginRequest(this.inputEmail,this.inputPassword);

    // this.loginRequest.inputEmail = this.inputEmail;
    // this.loginRequest.inputPassword = this.inputPassword;

    this.dataService.login(this.loginRequest)
      .subscribe(loginResponse =>{
        console.log(loginResponse);

        if(loginResponse.loginSuccess){
          this.router.navigate(['/dashboard']);
        }
        else{
          this.showInvlaidCredAlert = true;
          this.alertMessage = "Invalid credentials"
          this.router.navigate(['/home']);
        }
        
      });

  }
  closeAlert(){
    this.showInvlaidCredAlert = false;
    this.inputEmail = '';
    this.inputPassword='';
  }

}
