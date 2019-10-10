import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allUser:any
  constructor(private us:UserService,private router:Router) { }
  
  ngOnInit() {
    this.alluser();
  }
  alluser(){
    this.us.all().subscribe(
      data=>this.allUser = data,
      err=>console.log(err) 
    )
  }
  getDetail(id:string){
    console.log(id);
    this.router.navigate(['/user/detail/'+id])
  }
}
