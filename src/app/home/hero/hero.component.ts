import { Component, Input } from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  imports: [
    NgStyle
  ],
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() headline: string = 'Safe and Efficient Bookkeeping Services';
  @Input() subtext: string = 'Simplify Your Finances with Safe.';
  @Input() buttonText: string = 'Get in touch';
  @Input() backgroundImage: string = 'url(assets/images/default-hero.jpg)';
}
