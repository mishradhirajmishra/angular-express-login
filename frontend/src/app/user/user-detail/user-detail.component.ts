import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private us:UserService ,private activatedRoute:ActivatedRoute) { }
  user_id:String;
  user:any;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params :ParamMap)=>{
     this.user_id=params.get('id');
  
    })
    this.detail();
  }
   detail(){
    
    this.us.userDetail({id:this.user_id}).subscribe(
      data => this.user = data,
      err=>console.log(err)
    )
   }
}
