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
  categories$;
  adForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    categories: new FormControl('', Validators.required),
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


  createAd() {


    if(this.adForm.valid) {
      // this.adService.createAd(ad);
      this.toastr.success('Uspesno!')
    }


  }

  nextPage() {
    this.adService.ad.title = this.title.value;
    this.adService.ad.description = this.description.value;
    this.adService.ad.category = this.categories.value;
    this.router.navigate(['ad-create/more-info']);
  }

  ngOnInit(): void {

    this.categories$ = this.homeService.getCategories();
  }

}
