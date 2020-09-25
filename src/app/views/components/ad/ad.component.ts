import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent {
  @Input() special = false;
  constructor() { }

}
