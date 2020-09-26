import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-basic-info',
  templateUrl: './ad-basic-info.component.html',
  styleUrls: ['./ad-basic-info.component.scss']
})
export class AdBasicInfoComponent implements OnInit {

  constructor(private router: Router) { }

  nextPage() {
    this.router.navigate(['ad-create/more-info']);
  }

  ngOnInit(): void {
  }

}
