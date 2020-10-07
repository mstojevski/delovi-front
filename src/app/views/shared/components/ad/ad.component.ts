import { Component, Input } from '@angular/core';
import { IAd } from '../../../../models/ad.interface';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent {
  @Input() ad: IAd;

  constructor() { }

}
