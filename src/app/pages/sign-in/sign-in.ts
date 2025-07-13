import { Component, EventEmitter, Output, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SignInService } from '../../services/sign-in.service';
import { SignInUser } from '../../SignInUser';
import { SignInResponse } from '../../SignInResponse';

@Component({
  standalone: true,
  selector: 'app-sign-in',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css'],
})
export class SignIn {
  email = '';
  password = '';
  error = '';

  @Output() loggedIn = new EventEmitter<SignInResponse['data']>();
res: any;


  constructor(private router: Router, private signInService: SignInService) { }

  signIn() {
    if (!this.email || !this.password) {
      alert('Email, password and role are required.');
      return;
    }

    const userData: SignInUser = { email: this.email, password: this.password };

    this.signInService.signIn(userData).subscribe({
      next: (res) => {
        console.log('response', res);
        this.error = '';

        //emit to homepage
        //navigate to homepage
        this.loggedIn.emit(res.data)
        this.router.navigate(['/homepage']);

      },
      error: (err) => {
        console.log('invalid crede', err);
        this.error = 'invalid email or password';
      }
    },)

  }
}
