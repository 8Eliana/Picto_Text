import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../services/auth.service";

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

  onSubmit(formValue:any){
    this.auth.login(formValue.email,formValue.password,this.userType);
  }
}
