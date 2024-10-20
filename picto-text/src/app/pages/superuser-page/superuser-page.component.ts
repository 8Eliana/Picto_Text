import { Component } from '@angular/core';

@Component({
  selector: 'app-superuser-page',
  templateUrl: './superuser-page.component.html',
  styleUrl: './superuser-page.component.css'
})
export class SuperuserPageComponent {
  imgSrc:any = './assets/placeholder-image.jpg';
  private selectedImage: any;

  showPreview($event: any) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc = e.target?.result;
    };
    reader.readAsDataURL($event.target.files[0]);
    this.selectedImage = $event.target.files[0];
  }
}
