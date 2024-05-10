import { Component } from '@angular/core';
import { ApiIUserServiceService } from '../../services/api-iuser-service.service';
import { iUser } from '../../Models/iUser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj : iUser = {
    name : "",
    password : ""
  }

ngOnInit(): void {
alert("Admin user name : saeed \n Password : 123456")
  
}
constructor(private iUserService : ApiIUserServiceService, private route : Router) {
  
}


login(){
 // console.log(this.loginObj);
  
  this.iUserService.login(this.loginObj).subscribe({
    next : (res : any) =>{ console.log(res)
      localStorage.setItem('token' , res.token)
      this.route.navigateByUrl('/dashboard') 
    },
    error : (err) => console.log(err)
  })
}

}
