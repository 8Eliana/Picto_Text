import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ImageCaptionService } from "../../services/image-caption.service";
import {PostUser} from "../../models/post-user";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  imgSrc:any = './assets/placeholder-image.jpg';
  generatedText: string | undefined = undefined;
  private selectedImage: any;
  postForm : FormGroup;

  constructor(private fb: FormBuilder,private imageCaptionService: ImageCaptionService,private postService : PostService) {
    this.postForm = this.fb.group({
      text: ['',[Validators.required]],
      postImg: ['',[Validators.required]]
    });
  }

  get fc(){
    return this.postForm.controls;
  }
  showPreview($event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc = e.target?.result;
    };
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImage = $event.target.files[0];
  }

  onSubmit(){
    const postData:PostUser = {
      postImgPath : this.imgSrc  ,
      text: this.generatedText ?? ''
    }
    this.postService.uploadImageUser(this.selectedImage,postData);
    this.postForm.reset();
    this.imgSrc = './assets/placeholder-image.jpg';
  }

  async generateTextFromImage() {
    if (this.selectedImage) {
      try {
        this.generatedText = await this.imageCaptionService.imageCaption(this.selectedImage);
      } catch (error) {
        console.error("Error generating text from image", error);
      }
    }
  }
}
