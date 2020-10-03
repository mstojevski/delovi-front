import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdService, ICreateAd } from '../../../services/ad.service';
import { HomeService } from '../../../../../home/home.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ad-basic-info',
  templateUrl: './ad-basic-info.component.html',
  styleUrls: ['./ad-basic-info.component.scss']
})
export class AdBasicInfoComponent implements OnInit {
  brands$;
  categories$;
  adForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    favorite: new FormControl('', [Validators.required]),
    categories: new FormControl('', Validators.required),
    brands: new FormControl('', Validators.required)
  });
  constructor(private router: Router, private adService: AdService, private homeService: HomeService, private toastr: ToastrService) { }

  get title() {
    return this.adForm.get('title');
  }

  get description() {
    return this.adForm.get('description');
  }

  get categories() {
    return this.adForm.get('categories');
  }
  get brands() {
    return this.adForm.get('brands');
  }

  get favorite() {
    return this.adForm.get('favorite');
  }

  createAd() {
    const ad: ICreateAd = {
      title: this.title.value,
      description: this.description.value,
      category: this.categories.value,
      brand: this.brands.value,
      favorite: this.favorite.value
    }

    if(this.adForm.valid) {
      this.adService.createAd(ad);
      this.toastr.success('Uspesno!')
    }


  }

  nextPage() {
    this.router.navigate(['ad-create/more-info']);
  }

  ngOnInit(): void {
    this.brands$ = this.homeService.getBrends();
    this.categories$ = this.homeService.getCategories();
  }

}
