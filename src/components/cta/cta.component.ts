import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css'],
})
export class CtaComponent {
  @Input() buttonText: string = 'Click me';
  @Input() buttonLink?: string;

  // Forward click event to parent
  @Output() click = new EventEmitter<Event>();

  onClick(event: Event) {
    this.click.emit(event);
  }
}
