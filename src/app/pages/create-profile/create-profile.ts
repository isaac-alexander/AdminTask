import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { WorkRoleService } from '../../services/work-role';

@Component({
  standalone: true,
  selector: 'app-create-profile',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create-profile.html',
  styleUrls: ['./create-profile.css'],
})
export class CreateProfile implements OnInit {
  profile = {
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    job_role: '',
    department: '',
    address: '',
  };

  constructor(private router: Router, private workRole: WorkRoleService) {}

  ngOnInit() {
    if (!this.workRole.isAdmin()) {
      alert('Access denied. Only admins can create employee profiles.');
      this.router.navigate(['/homepage']);
    }
  }

  saveProfile() {
    console.log('Profile saved:', this.profile);
    alert('Profile created successfully!');
    this.router.navigate(['/signin']);
  }
}
