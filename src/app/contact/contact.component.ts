import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [FormsModule, NgIf, RouterLink],
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeShrink', [
      transition('void => form', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate(
          '700ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 1, transform: 'scale(1)' })
        ),
      ]),
      transition('form => void', [
        animate(
          '700ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 0, transform: 'scale(0.95)' })
        ),
      ]),
      transition('void => success', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate(
          '700ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 1, transform: 'scale(1)' })
        ),
      ]),
      transition('success => void', [
        animate(
          '700ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 0, transform: 'scale(0.95)' })
        ),
      ]),
    ]),
  ],
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('container', { static: false }) containerRef!: ElementRef<HTMLDivElement>;

  form = {
    name: '',
    email: '',
    message: '',
  };

  isLoading = false;

  contentState: 'form' | 'success' = 'form';

  private prevHeight = 0;
  private nextHeight = 0;

  ngAfterViewInit() {
    if (this.containerRef) {
      this.prevHeight = this.containerRef.nativeElement.offsetHeight;
    }
  }

  sendEmail() {
    if (this.isLoading) return;
    this.isLoading = true;

    const currentYear = new Date().getFullYear();

    emailjs
      .send(
        'service_gnri5zs',
        'template_j9za66g',
        {
          from_name: this.form.name,
          email: this.form.email,
          message: this.form.message,
          current_year: currentYear,
        },
        'pT9gayVqHY9iOu6bS'
      )
      .then(() =>
        emailjs.send(
          'service_gnri5zs',
          'template_ql8tp1g',
          {
            name: this.form.name,
            email: this.form.email,
            message: this.form.message,
            time: new Date().toLocaleString(),
            current_year: currentYear,
          },
          'pT9gayVqHY9iOu6bS'
        )
      )
      .then(() => {
        if (!this.containerRef) {
          this.isLoading = false;
          return;
        }

        this.prevHeight = this.containerRef.nativeElement.offsetHeight;

        this.contentState = 'success';

        setTimeout(() => {
          this.nextHeight = this.containerRef.nativeElement.offsetHeight;

          const container = this.containerRef.nativeElement;

          container.style.height = this.prevHeight + 'px';

          // Trigger reflow
          container.offsetHeight;

          container.style.transition = 'height 700ms ease';
          container.style.height = this.nextHeight + 'px';

          container.addEventListener(
            'transitionend',
            () => {
              container.style.height = 'auto';
              container.style.transition = '';
            },
            { once: true }
          );

          this.isLoading = false;
        }, 0);
      })
      .catch((error) => {
        console.error('Something went wrong:', error);
        this.isLoading = false;
      });
  }

  onAnimationDone(event: any) {
    // Optional: handle animation done events if needed
  }
}
