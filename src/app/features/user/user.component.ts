import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  logindata(email:any,password:any){
    const datal:any={
      email:email,
      password:password

    }
    console.log(datal)
    this.authService.login(datal).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
