import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerInfo: Register = {
    FirstName:"",
    LastName:"",
    Email:"",
    Phone:"",
    Password:"",
    Address:""
  };

  constructor(private storage:LocalStorageService, private alertify:AlertifyService,
    private router:Router) { }

  ngOnInit() {
  }

  onSubmit(info:Register, form:NgForm){

    this.storage.addUser(this.registerInfo).subscribe({
    next: data => {console.log(data), this.alertify.success("Comment sent");
    },
      error: error => console.log(error.StatusText)
    });
    form.reset();

    this.router.navigate(['/login']);
  }
}
