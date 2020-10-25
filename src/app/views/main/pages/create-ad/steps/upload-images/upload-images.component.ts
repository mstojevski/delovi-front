import { Component, OnInit } from '@angular/core';
import { AdService } from '../../services/ad.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent implements OnInit {

  constructor(private adService:AdService) { }

  ngOnInit(): void {
  }

  upload(event) {
    console.log('event', event);
  }

  createAd() {
    this.adService.createAd(this.adService.ad);
  }

}
