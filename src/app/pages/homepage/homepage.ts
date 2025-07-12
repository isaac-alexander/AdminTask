import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkRoleService } from '../../services/work-role';

@Component({
  standalone: true,
  selector: 'app-homepage',
  imports: [CommonModule, RouterModule],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css'],
})
export class Homepage {
  constructor(public workRole: WorkRoleService) {}
}
