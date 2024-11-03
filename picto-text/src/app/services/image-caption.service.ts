import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageCaptionService {
  private apiUrl = 'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base';

  constructor(private http: HttpClient) { }
  generateCaption(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', image); // Ensure 'file' matches what Hugging Face expects.

    const headers = new HttpHeaders({
      Authorization: `Bearer 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`,
    });

    return this.http.post<any>(
      'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base',
      formData,
      { headers }
    ).pipe(
      map(response => {
        return typeof response === 'string' ? JSON.parse(response) : response;
      })
    );
  }
}
