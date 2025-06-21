import { Component } from '@angular/core';
import {CtaComponent} from '../../../components/cta/cta.component';

@Component({
  selector: 'app-stats',
  imports: [
    CtaComponent,
    CtaComponent
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {

}
