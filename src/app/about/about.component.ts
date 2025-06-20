import { Component } from '@angular/core';
import {HeroComponent} from '../home/hero/hero.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [
    HeroComponent,
    RouterLink
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
