import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreateAdService } from '../../services/create-ad.service';
import { HomeService } from '../../../home/service/home.service';


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
    categories: new FormControl(null, Validators.required),
  });
  constructor(private router: Router, private adService: CreateAdService, private homeService: HomeService, private toastr: ToastrService) { }

  get title() {
    return this.adForm.get('title');
  }

  get description() {
    return this.adForm.get('description');
  }

  get categories() {
    return this.adForm.get('categories');
  }


  nextPage() {
    this.adService.ad.title = this.title.value;
    this.adService.ad.description = this.description.value;
    this.adService.ad.category = this.categories.value;

    if(this.adForm.valid) {
      this.router.navigate(['ad-create/more-info']);
    }

  }

  ngOnInit(): void {
    this.categories$ = this.homeService.getCategories();
  }

}
