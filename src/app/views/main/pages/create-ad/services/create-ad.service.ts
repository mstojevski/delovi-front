import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAd } from 'src/app/models/ad.interface';
import { FileUpload } from 'primeng/fileupload';
export interface ICreateAd {
  title: string;
  description: string;
  category: string;
  brand: string;
  favorite: boolean;
  price:number;
  year: number;
  model:string;
  status:string;
}

@Injectable({
  providedIn: 'root'
})


export class CreateAdService {
 ad: any = {};

  constructor(private http: HttpClient) { }

  createAd(files: FileUpload) {
    const formData = new FormData();
    files.files.forEach(d => {
      formData.append('image', d);
    })
    for(const item in this.ad) {
      formData.append(item, this.ad[item])
    }
    return this.http.post(`${environment.apiUrl}/ad`, formData);
  }
}
