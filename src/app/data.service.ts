import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse} from './login/models/login.response'
import { LoginRequest} from './login/models/login.request'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})



export class DataService {

  url:string = "http://localhost:8080/user/login";

  

  constructor(private http: HttpClient) {

   }

   login (loginRequest:LoginRequest): Observable<LoginResponse> {
     return this.http.post<LoginResponse>(this.url,loginRequest,httpOptions);
   }
}
