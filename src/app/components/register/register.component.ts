import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { AlertifyService } from 'src/app/services/alertify.service';

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

  constructor(private storage:LocalStorageService, private alertify:AlertifyService) { }

  ngOnInit() {
  }

  onSubmit(info:Register, form:NgForm){

    this.storage.addUser(this.registerInfo).subscribe({
    next: data => {console.log(data), this.alertify.success("Comment sent");
    },
      error: error => console.log(error.StatusText)
    });
    form.reset();
  }
}
