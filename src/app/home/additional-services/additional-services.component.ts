import { Component } from '@angular/core';
import {ScrollToTopComponent} from '../../../components/scroll-to-top/scroll-to-top.component';
import {CtaComponent} from '../../../components/cta/cta.component';

@Component({
  selector: 'app-additional-services',
  imports: [
    ScrollToTopComponent,
    CtaComponent,
    ScrollToTopComponent
  ],
  templateUrl: './additional-services.component.html',
  styleUrl: './additional-services.component.css'
})
export class AdditionalServicesComponent {

}
