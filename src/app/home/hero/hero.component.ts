import { Component, Input } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  imports: [
    RouterLink,
    NgStyle,
    // your existing imports
  ],
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() headline: string = 'Safe and Efficient Bookkeeping Services';
  @Input() subtext: string = 'Simplify Your Finances with Safe.';
  @Input() buttonText: string = 'Get in touch';
  @Input() backgroundImage: string = 'url(assets/images/default-hero.jpg)';

  // New inputs:
  @Input() scrollTargetId?: string;
  @Input() buttonLink?: string;

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
      // fallback behavior (optional)
      console.warn('No scrollTargetId or buttonLink provided');
    }
  }
}
