import { Component, OnInit ,} from '@angular/core';
import { NgForm } from "@angular/forms";
import {Title } from "@angular/platform-browser";
import {AuthService  } from "../auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   message:String;
  constructor(private ts:Title,private as:AuthService,private router:Router ) { }
  
  ngOnInit() {

  }
  login(data:NgForm){
    this.as.login(data.value).subscribe(
      data=>{ 
        if(data.token !==''){
          localStorage.setItem('token',data.token); 
          this.router.navigate(['/user/dashboard']) 
        } else{
          localStorage.clear();
        }      
        this.message = data.message;      
      },
      err =>console.log(err)
    )
  
  }
}
