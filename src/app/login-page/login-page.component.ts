import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router:Router,private authService:AuthServiceService) { }

  ngOnInit(): void {
    
  }

  handleRequest(text:NgForm){
    var Dta = "";

    //send data
    const data = this.authService.getToken(text.value["login"],text.value["password"])
    .subscribe((data)=>{
      Dta=this.authService.setSession(data);
    });

    //redirection
    if(data!==null){
      this.router.navigate(["/home"]);
    }else{
      this.router.navigate(["/"]);
    }
    
  }

}
