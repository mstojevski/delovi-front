import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from '../../../../../home/service/home.service';
import { AdService } from '../../services/ad.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss'],
})
export class MoreInfoComponent implements OnInit {
  statusValues = ['Novo', 'Polovno']
  brands$;
  moreInfoForm = new FormGroup({
    brands: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    favorite: new FormControl(false),
    status: new FormControl('', Validators.required),
  })
  constructor(private router: Router, private homeService: HomeService, private adService: AdService) {}

  get brands() {
    return this.moreInfoForm.get('brands');
  }
  get favorite() {
    return this.moreInfoForm.get('favorite');
  }
  get model() {
    return this.moreInfoForm.get('model');
  }
  get year() {
    return this.moreInfoForm.get('year');
  }
  get price() {
    return this.moreInfoForm.get('price');
  }
  get status() {
    return this.moreInfoForm.get('status');
  }

  ngOnInit(): void {
    this.brands$ = this.homeService.getBrends();
  }

  nextPage() {

    this.adService.ad.brand = this.brands.value;
    this.adService.ad.favorite = this.favorite.value;
    this.adService.ad.model = this.model.value;
    this.adService.ad.year = this.year.value;
    this.adService.ad.price = this.price.value;
    this.adService.ad.status = this.status.value;
    if(this.moreInfoForm.valid) {
      this.router.navigate(['ad-create/upload-images']);
    }

  }

  prevPage() {
    this.router.navigate(['ad-create/info']);
  }
}
