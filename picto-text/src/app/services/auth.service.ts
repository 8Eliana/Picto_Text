import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
  ) {
  }
  login(email: string, password: string, userType: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then((logRef) => {
      if ((userType === 'user') && (email === 'user@gmail.com')) {
        this.toastr.success('Login-ul este realizat cu succes!');
        this.router.navigate(['user-page']);
      } else if ((userType === 'superuser') && (email === 'superuser@gmail.com')) {
        this.toastr.success('Login-ul este realizat cu succes!');
        this.router.navigate(['superuser-page']);
      } else {
        this.toastr.error('Login-ul nu s-a putut realiza! Încercați din nou!');
        this.router.navigate(['login']);
      }
    }).catch(e => {
      this.toastr.warning(e);
    })
  }
}
