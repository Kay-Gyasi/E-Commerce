import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginReq } from 'src/app/models/loginReq';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginReq:LoginReq = {
    username:"",
    password:""
  }

  constructor(private alertify:AlertifyService, private router:Router,
    private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    const token = this.authService.authUser(this.loginReq).subscribe({
      next: data => {
        console.log(data),
        localStorage.setItem('token', JSON.stringify(data)),
        this.alertify.success("Successful Login");
      },
      error: error => {this.alertify.failed("Invalid login");}
    });

    // when using api, we will save into the localStorage a token
    // localStorage.setItem('token', this.emailField);

    /* if(localStorage.getItem('token')){
      this.alertify.success("Successful Login"); // use alertify instead
    }
    else{
      this.alertify.failed("failed")
    } */

    setTimeout(() => this.router.navigate(['/']), 500);

  }

}
