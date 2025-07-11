import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-create-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-profile.html',
  styleUrls: ['./create-profile.css'],
})
export class CreateProfile {
  profile = {
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    job_role: '',
    department: '',
    address: ''
  };

  saveProfile() {
    console.log('Profile saved:', this.profile);
    alert('Profile created successfully!');
  }
}
