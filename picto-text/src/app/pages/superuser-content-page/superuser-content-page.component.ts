import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-superuser-content-page',
  templateUrl: './superuser-content-page.component.html',
  styleUrl: './superuser-content-page.component.css'
})
export class SuperuserContentPageComponent implements OnInit{

  postArray: any[] = [];
  constructor( private postService : PostService){
  }

  ngOnInit() {
    this.postService.loadDataSuperUser().subscribe(val => {
      console.log(val);
      this.postArray = val;
    });
  }

  onDelete(postImgPath: any, id: any) {
    this.postService.deleteImageSuperUser(postImgPath, id);
  }

}
