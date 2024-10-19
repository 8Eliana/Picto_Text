import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UserLogin} from "../../models/user-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userType: string = '';
  constructor(private route: ActivatedRoute, private auth: AuthService){}

  ngOnInit() {
    this.userType = this.route.snapshot.paramMap.get('userType') || '';
  }
  login(formVal:any){
    const rezData: UserLogin = {
      email: formVal.email,
      password: formVal.password,
    };
    this.auth.login(rezData.email,rezData.password,this.userType);
  }
}
