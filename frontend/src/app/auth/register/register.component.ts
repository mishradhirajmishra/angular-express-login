import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message:String;
  emailExistStatus:String=""
  constructor(private ts:Title,private as:AuthService,private router:Router ) { }
  
  ngOnInit() {

  }
  register(data:NgForm){
    this.as.register(data.value).subscribe(
      data=>{this.message=data.message},
      err =>console.log(err)
    )
  
  }
  chkEmail(email:String){
    this.as.emailExist({email:email}).subscribe(
      data=>this.emailExistStatus=data.message,
      err =>console.log(err)
    )
         console.log(email)
  }
}
