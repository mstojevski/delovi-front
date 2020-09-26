import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss'],
})
export class MoreInfoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  nextPage() {
    this.router.navigate(['ad-create/upload-images']);
  }

  prevPage() {
    this.router.navigate(['ad-create/info']);
  }
}
