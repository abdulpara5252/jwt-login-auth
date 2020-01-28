import { Component, OnInit } from '@angular/core';
import {  HttpHeaders,HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  constructor(private httpClient: HttpClient,private router: Router) { }

  ngOnInit() {
    
  }
  login(form: NgForm) {
    debugger
    let credentials = JSON.stringify(form.value);
    this.httpClient.post("http://localhost:5000/api/auth/login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      let token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/home"]);
    }, err => {
      this.invalidLogin = true;
    });
  }

}
