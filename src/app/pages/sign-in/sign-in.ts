import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sign-in',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css'],
})
export class SignIn {
  email = '';
  password = '';

  constructor(private router: Router) { }

  signIn() {
    if (this.email && this.password) {
      console.log('Signed in as:', this.email);
      this.router.navigate(['/create-profile']);
    } else {
      alert('Please enter both email and password.');
    }
  }
}
