import { Component } from '@angular/core';
import {HeroComponent} from './hero/hero.component';
import {ServicesComponent} from './services/services.component';
import {StatsComponent} from './stats/stats.component';
import {AdditionalServicesComponent} from './additional-services/additional-services.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ServicesComponent,
    StatsComponent,
    AdditionalServicesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
