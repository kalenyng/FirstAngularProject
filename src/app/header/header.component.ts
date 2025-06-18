import { Component } from '@angular/core';
import {RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    RouterLinkActive
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
