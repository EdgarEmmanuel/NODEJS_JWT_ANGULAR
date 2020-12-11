import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
    this.authService.sendGetData().subscribe((data)=>{
      console.log(data);
    })
  }

}
