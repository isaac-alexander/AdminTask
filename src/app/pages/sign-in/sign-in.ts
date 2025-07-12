import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { WorkRoleService } from '../../services/work-role';

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
  role: 'admin' | 'employee' | '' = '';

  constructor(private router: Router, private workRole: WorkRoleService) {}

  signIn() {
    if (!this.email || !this.password || !this.role) {
      alert('Email, password and role are required.');
      return;
    }

    this.workRole.currentRole = this.role;
    this.router.navigate(['/homepage']);
  }
}
