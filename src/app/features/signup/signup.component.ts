import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  // form: any = {
  //   role_name:null,
  //   username: [null],
  //   email: null,
  //   password: null
  // };
  // isSuccessful = false;
  // isSignUpFailed = false;
  // errorMessage = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  } 
  registerdata(role_name:any,username:any,email:any,password:any){
    const data:any={
      role_name:role_name,
      username:username,
      email:email,
      password:password
    }
    console.log(data)
  this.authService.register(data).subscribe((res:any)=>{

  })
  }

}
