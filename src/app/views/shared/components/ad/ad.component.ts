import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent {
  @Input() special = false;
  @Input() title: string;
  @Input() description: string;
  @Input() status: string;
  @Input() price: number;
  @Input() author: string;
  @Input() user: any;
  @Input() id: string;
  @Input() date: any;

  constructor() { }

}
