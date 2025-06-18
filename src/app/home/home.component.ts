import { Component } from '@angular/core';
import {HeroComponent} from './hero/hero.component';
import {ServicesComponent} from './services/services.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ServicesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
