import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private ts:Title ,private router:Router) { }

  ngOnInit() {
    this.ts.setTitle('Home Page')
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
