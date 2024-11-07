import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-user-content-page',
  templateUrl: './user-content-page.component.html',
  styleUrl: './user-content-page.component.css'
})
export class UserContentPageComponent implements OnInit{

  postArray: any[] = [];
 constructor( private postService : PostService){
 }

 ngOnInit() {
   this.postService.loadDataUser().subscribe(val => {
     console.log(val);
     this.postArray = val;
   });
 }

  onDelete(postImgPath: any, id: any) {
    this.postService.deleteImageUser(postImgPath, id);
  }
}
