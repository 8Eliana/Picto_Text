import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ToastrService} from "ngx-toastr";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private storage: AngularFireStorage,
              private afs : AngularFirestore,
              private toastr : ToastrService) { }


  //User
  uploadImageUser(selectedImage :any,postData :any){
    const filePath = `postIMG1/${Date.now()}`;
    console.log(filePath);
    this.storage.upload(filePath,selectedImage).then(() => {
      console.log("post img upload succ");
      this.storage.ref(filePath).getDownloadURL().subscribe(URL => {
        postData.postImgPath = URL;
        console.log(postData);
        this.saveDataUser(postData);
      })
    });
  }

  saveDataUser(postData :any) {
    this.afs.collection('user-posts').add(postData).then(docRef => {
      this.toastr.success('Datele au fost salvate cu succes!');
    });
  }

  loadDataUser(){
    return this.afs.collection('user-posts').snapshotChanges().pipe(map(action => {
      return action.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log(id, data);
        return { id, data };
      });
    }));
  }

  deleteImageUser(postImgPath: any, id: any) {
    this.storage.storage
      .refFromURL(postImgPath)
      .delete()
      .then(() => {
        this.deteleDataUser(id);
      });
  }
  deteleDataUser(id: any) {
    this.afs
      .doc(`user-posts/${id}`)
      .delete()
      .then(() => {
        this.toastr.success('Datele au fost șterse!');
      });
  }


  uploadImageSuperUser(selectedImage :any,postData :any){
    const filePath = `postIMG1/${Date.now()}`;
    console.log(filePath);
    this.storage.upload(filePath,selectedImage).then(() => {
      console.log("post img upload succ");
      this.storage.ref(filePath).getDownloadURL().subscribe(URL => {
        postData.postImgPath = URL;
        console.log(postData);
        this.saveDataSuperUser(postData);
      })
    });
  }


  //-----SuperUser
  saveDataSuperUser(postData :any) {
    this.afs.collection('superuser-posts').add(postData).then(docRef => {
      this.toastr.success('Datele au fost salvate cu succes!');
    });
  }

  loadDataSuperUser(){
    return this.afs.collection('superuser-posts').snapshotChanges().pipe(map(action => {
      return action.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log(id, data);
        return { id, data };
      });
    }));
  }

  deleteImageSuperUser(postImgPath: any, id: any) {
    this.storage.storage
      .refFromURL(postImgPath)
      .delete()
      .then(() => {
        this.deteleDataSuperUser(id);
      });
  }
  deteleDataSuperUser(id: any) {
    this.afs
      .doc(`superuser-posts/${id}`)
      .delete()
      .then(() => {
        this.toastr.success('Datele au fost șterse!');
      });
  }

}
