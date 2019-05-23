import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    let fUser = e.target.id.value;
    let fPass = e.target.pass.value;

    if(fUser == 'mon' && fPass =='123'){

      alert("Đăng Nhập Thành Công !");
      
      this.router.navigate(['home']);
      this.auth.setLoggedIn(true);
    
      
    }else{
      alert("Đăng Nhập Thất bại !");
      this.auth.setLoggedIn(false);
    }
  }

}
