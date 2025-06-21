import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';
import {CtaComponent} from '../cta/cta.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,               // Add if you want it standalone, remove if not
  imports: [
    RouterLink,
    NgStyle,
    CtaComponent
  ],
})
export class HeroComponent {
  @Input() headline: string = 'Safe and Efficient Bookkeeping Services';
  @Input() subtext: string = 'Simplify Your Finances with Safe.';
  @Input() buttonText: string = 'Get in touch';
  @Input() backgroundImage: string = 'url(assets/images/default-hero.jpg)';
  @Input() scrollTargetId?: string;
  @Input() buttonLink: string = '/contact';

  constructor(private router: Router) {}

  onButtonClick() {
    if (this.scrollTargetId) {
      const el = document.getElementById(this.scrollTargetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (this.buttonLink) {
      this.router.navigate([this.buttonLink]);
    } else {
      console.warn('No scrollTargetId or buttonLink provided');
    }
  }
}
