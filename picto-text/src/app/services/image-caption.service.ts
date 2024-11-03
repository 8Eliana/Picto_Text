import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageCaptionService {

  constructor() { }
  async imageCaption(selectedImage:any) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base",
      {
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: selectedImage,
      }
    );
    const result = await response.json();
    const apiResult = result[0];

    console.log('api result', apiResult)
    return apiResult['generated_text'];
  }
}
