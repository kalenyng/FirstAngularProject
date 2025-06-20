import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [FormsModule, NgIf],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitted = false;
  isLoading = false;

  constructor(private router: Router) {
    this.isSubmitted = localStorage.getItem('contactSubmitted') === 'true';
  }

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
          console.log('Notification sent to you');
          return emailjs.send('service_gnri5zs', 'template_ql8tp1g', {
            name: this.form.name,
            email: this.form.email,
            message: this.form.message,
            time: new Date().toLocaleString(),
            current_year: currentYear
          }, 'pT9gayVqHY9iOu6bS');
        })
        .then(() => {
          console.log('Auto-reply sent');
          this.isSubmitted = true;
          localStorage.setItem('contactSubmitted', 'true');
          this.isLoading = false;
          this.router.navigate(['/email-sent']);
        })
        .catch((error) => {
          console.error('Something went wrong:', error);
          this.isLoading = false;
        });
  }
}

