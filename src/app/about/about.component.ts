import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {CtaComponent} from '../../components/cta/cta.component';
import {ScrollToTopComponent} from '../../components/scroll-to-top/scroll-to-top.component';
import {HeroComponent} from '../../components/hero/hero.component';

@Component({
  selector: 'app-about',
  imports: [
    HeroComponent,
    RouterLink,
    ScrollToTopComponent,
    CtaComponent,
    CtaComponent,
    ScrollToTopComponent,
    HeroComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
