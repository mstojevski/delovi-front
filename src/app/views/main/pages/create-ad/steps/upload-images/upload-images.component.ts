import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { CreateAdService } from '../../services/create-ad.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent implements OnInit {
  @ViewChild(FileUpload, {static: true}) files: FileUpload
  constructor(private adService:CreateAdService, private toast: ToastrService, private route: Router) { }

  ngOnInit(): void {
  }

  createAd() {
    this.adService.createAd(this.files).subscribe(() => {
      this.toast.success("Uspešno kreiran oglas");
      this.route.navigate(['/'])
    }, (err) => {
      this.toast.error("Greška pri kreiranju oglasa")
    });
  }
}
