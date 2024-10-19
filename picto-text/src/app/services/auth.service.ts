import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private afs: AngularFirestore
  ) {}

  login(email: string, password: string,userType:string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (userCredential) => {
        this.afs.collection('users').doc(userCredential.user?.uid).ref.get().then((doc: any) => {
          if (doc.exists) {
            const userEmail = userCredential.user?.email; // Get the user's email address

            if (userEmail) {
              if ((userType === 'user') && (userEmail.includes('@user'))) {
                this.toastr.success('Login-ul este realizat cu succes!');
                this.router.navigate(['user-page']);
              }
              else if((userType === 'superuser') && (userEmail.includes('@superuser'))){
                this.toastr.success('Login-ul este realizat cu succes!');
                this.router.navigate(['']);
              }
            }
          }
        });
      },
      (err) => {
        this.toastr.error('Login-ul nu s-a putut realiza!Incercati din nou!');
        this.router.navigate(['login']);
      }
    );
  }
}
