import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ImageCaptionService } from "../../services/image-caption.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
  constructor(private fb: FormBuilder,private http: HttpClient,private imageCaptionService: ImageCaptionService,private postService : PostService) {
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
    this.postService.uploadImage(this.selectedImage,postData);
  }

  async generateTextFromImage() {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base",
      {
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: this.selectedImage,
      }
    );
    const result = await response.json()
    const apiResult = result[0]

    this.generatedText = apiResult['generated_text']
  }
}
