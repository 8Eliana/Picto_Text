import { Injectable } from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private storage: AngularFireStorage) { }

  uploadImage(selectedImage :any,postData :any){
    const filePath = `postIMG1/${Date.now()}`;
    console.log(filePath);
    this.storage.upload(filePath,selectedImage).then(() => {
      console.log("post img upload succ");
      this.storage.ref(filePath).getDownloadURL().subscribe(URL => {
        console.log(URL);
      })
    });
  }
}
