import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ImageCaptionService} from "../../services/image-caption.service";
import {PostService} from "../../services/post.service";
import {PostSuperUser} from "../../models/post-super-user";
import firebase from "firebase/compat";
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-superuser-page',
  templateUrl: './superuser-page.component.html',
  styleUrl: './superuser-page.component.css'
})
export class SuperuserPageComponent {
  imgSrc1:any = './assets/placeholder-image.jpg';
  imgSrc2:any = './assets/placeholder-image.jpg';
  private selectedImage1: any;
  private selectedImage2: any;
  generatedText1: string | undefined = undefined;
  generatedText2: string | undefined = undefined;
  postForm : FormGroup;

  constructor(private fb: FormBuilder,private imageCaptionService: ImageCaptionService,private postService : PostService) {
    this.postForm = this.fb.group({
      text1: ['',[Validators.required]],
      postImg1: ['',[Validators.required]],
      text2: ['',[Validators.required]],
      postImg2: ['',[Validators.required]]
    });
  }

  get fc(){
    return this.postForm.controls;
  }

  showPreview1($event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(e.target)
      this.imgSrc1 = e.target?.result;
    };
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImage1 = $event.target.files[0];
  }

  showPreview2($event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc2 = e.target?.result;
    };
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImage2 = $event.target.files[0];
  }

  onSubmit(){
    const postData:PostSuperUser = {
      postImgPath1 : this.imgSrc1  ,
      text1: this.generatedText1 ?? '',
      postImgPath2 : this.imgSrc2  ,
      text2: this.generatedText2 ?? '',
      timestamp: Timestamp.now()
    }
    if(postData.postImgPath1 === './assets/placeholder-image.jpg' && postData.postImgPath2 !== './assets/placeholder-image.jpg') {
      this.postService.uploadImageSuperUser(this.selectedImage2,postData);
      this.postForm.reset();
      this.imgSrc2 = './assets/placeholder-image.jpg';
    } else if(postData.postImgPath2 === './assets/placeholder-image.jpg' && postData.postImgPath1 !== './assets/placeholder-image.jpg' ){
      this.postService.uploadImageSuperUser(this.selectedImage1,postData);
      this.postForm.reset();
      this.imgSrc1 = './assets/placeholder-image.jpg';
    } else {
      this.postService.uploadImageSuperUser(this.selectedImage1, postData);
      this.postService.uploadImageSuperUser(this.selectedImage2, postData);
      this.postForm.reset();
      this.imgSrc1 = './assets/placeholder-image.jpg';
      this.imgSrc2 = './assets/placeholder-image.jpg';
    }
  }

  async generateTextFromImage1() {
    if (this.selectedImage1) {
      try {
        this.generatedText1 = await this.imageCaptionService.imageCaption(this.selectedImage1);
      } catch (error) {
        console.error("Error generating text from image", error);
      }
    }
  }

  async generateTextFromImage2() {
    if (this.selectedImage2) {
      try {
        this.generatedText2 = await this.imageCaptionService.imageCaption(this.selectedImage2);
      } catch (error) {
        console.error("Error generating text from image", error);
      }
    }
  }

  async generateTextFromImage() {
    if(this.selectedImage1 === './assets/placeholder-image.jpg' && this.selectedImage2 !== './assets/placeholder-image.jpg'){
      await this.generateTextFromImage2();
    } else if (this.selectedImage2 === './assets/placeholder-image.jpg' && this.selectedImage1 !== './assets/placeholder-image.jpg'){
      await this.generateTextFromImage1();
    } else {
      await Promise.all([this.generateTextFromImage1(),this.generateTextFromImage2()])
    }
  }
}
