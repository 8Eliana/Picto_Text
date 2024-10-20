import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit{
  userType: string = '';
  constructor(private fireauth: AngularFireAuth, private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {
    const urlPath = this.router.url;
    this.userType = urlPath.split('/').pop() || '';
  }
  signout() {
    this.fireauth.signOut().then(() => {
      this.router.navigate(['']);
    })
  }

  navgateToContentPage(userType: any) {
    if(userType === 'user-page'){
      this.router.navigate(['user-content-page']);
    }
    else if(userType === 'superuser-page'){
      this.router.navigate(['superuser-content-page']);
    }
  }
}
