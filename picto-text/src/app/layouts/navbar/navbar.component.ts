import { Component } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}
  signout() {
    this.fireauth.signOut().then(() => {
      this.router.navigate(['first-page']);
    })
  }
}
