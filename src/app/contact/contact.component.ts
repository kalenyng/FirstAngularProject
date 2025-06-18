import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    message: ''
  };

  status = '';

  submitForm() {
    console.log('Form data:', this.form);
    this.status = 'Message sent! Thank you for contacting us.';
    this.form = { name: '', email: '', message: '' };
  }
}
