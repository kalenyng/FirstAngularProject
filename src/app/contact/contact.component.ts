import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { NgIf } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [FormsModule, NgIf, RouterLink],
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeShrink', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('500ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('400ms cubic-bezier(0.55, 0, 0.55, 0.2)', style({ opacity: 0, transform: 'scale(0.95)' })),
      ]),
    ]),
  ],
})

export class ContactComponent {
  form = {
    name: '',
    email: '',
    message: ''
  };

  formVisible = true;      // 👈 controls form visibility
  isSubmitted = false;     // 👈 shows success after animation
  isLoading = false;

  sendEmail() {
    if (this.isLoading) return;

    this.isLoading = true;
    const currentYear = new Date().getFullYear();

    emailjs.send('service_gnri5zs', 'template_j9za66g', {
      from_name: this.form.name,
      email: this.form.email,
      message: this.form.message,
      current_year: currentYear
    }, 'pT9gayVqHY9iOu6bS')
      .then(() => {
        return emailjs.send('service_gnri5zs', 'template_ql8tp1g', {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
          time: new Date().toLocaleString(),
          current_year: currentYear
        }, 'pT9gayVqHY9iOu6bS');
      })
      .then(() => {
        this.isLoading = false;
        this.formVisible = false; // 👈 triggers fade out
        // isSubmitted will be set when animation is done
      })
      .catch((error) => {
        console.error('Something went wrong:', error);
        this.isLoading = false;
      });
  }

  onAnimationDone(event: any) {
    if (!this.formVisible && !this.isSubmitted) {
      this.isSubmitted = true; // 👈 fade in success only after fade out finishes
    }
  }
}



