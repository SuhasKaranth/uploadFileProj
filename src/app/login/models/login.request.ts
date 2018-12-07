import { constructDependencies } from "@angular/core/src/di/reflective_provider";

// {
// 	"inputEmail":"suhas.karanth@gmail.com",
// 	"inputPassword" : "1234"
// }

export class LoginRequest{
    inputEmail:string;
    inputPassword:string

    constructor(inputEmail,inputPassword){
        this.inputEmail = inputEmail;
        this.inputPassword = inputPassword;
    }
}