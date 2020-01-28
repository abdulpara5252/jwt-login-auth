import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  Title="hello"
  constructor(private jwtHelper: JwtHelperService,private router: Router) { }
  
  ngOnInit() {
  }
  isUserAuthenticated() {
    let token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }
 
  public logOut = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(["/"]);
  }
    
}
