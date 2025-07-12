import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WorkRoleService {
  currentRole: 'admin' | 'employee' | null = null;

  isAdmin(): boolean {
    return this.currentRole === 'admin';
  }

  isEmployee(): boolean {
    return this.currentRole === 'employee';
  }
}
