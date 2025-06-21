import { Component } from '@angular/core';
import {ServicesComponent} from './services/services.component';
import {StatsComponent} from './stats/stats.component';
import {AdditionalServicesComponent} from './additional-services/additional-services.component';
import {HeroComponent} from '../../components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ServicesComponent,
    StatsComponent,
    AdditionalServicesComponent,
    HeroComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
