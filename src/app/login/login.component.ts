import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userList!:User[];

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(){
    this.loginService.getUsersList().subscribe({
      next:users=>this.userList=users
    });
  }

  // userList=[
  //   {userName:'shiva',password:'shiva123'},
  //   {userName:'admin',password:'admin123'},
  //   {userName:'user',password:'user123'}
  // ];

  userName:string="";
  password:string="";

  isUserNameErr:boolean=false;
  isPasswordErr:boolean=false;

  isSubmitted:boolean=false;

  message:string="Invalid Credentials";


  onLogin(){
    this.loginService.isUserAuthenticated(this.userName,this.password).subscribe({
      next:(authenticated)=>{
        if(authenticated){
          this.message = "Login Successful!";
          this.router.navigate(['/book-ride']);
        }else{
          this.message = "Invalid Credentials";
        }
        alert(this.message);
      }
    })

    // if(this.userName!=""&&this.password!=""){
    //   this.isSubmitted=true;
    //   for(let item of this.userList){
    //     if(item.userName==this.userName && item.password==this.password){
    //       this.isAuthenticated=true;
    //       break;
    //     }
    //   }

    }


  onUserBlur(name:string){
    if(name==""){
      this.isUserNameErr=true;
    }else{
      this.isUserNameErr=false;
    }

  }
  onPwdBlur(pwd:string){
    if(pwd==""){
      this.isPasswordErr=true;
    }else{
      this.isPasswordErr=false;
    }

  }

}
