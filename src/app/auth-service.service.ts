import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  //:Observable<any>

  public getToken(email:String,pwd:String){
    return this.http.post<any>("http://localhost:3000/post",{login:email,password:pwd});
  }


  public sendData(){
    this.http.post("http://localhost:3000/home",{authorization:this.getUserToken()})
      .subscribe((data)=>{
      console.log(data);
    })
  }

  public sendGetData(){
    return this.http.get("http://localhost:3000/home");
  }

  public getUserToken(){
    return window.sessionStorage.getItem("token");
  }


  public setSession(auth){
    //set in the storage
    this.logout();
    window.sessionStorage.setItem("token",auth.idToken);

    return window.sessionStorage.getItem("token");
  }

  logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("expired_at");
  }




}
