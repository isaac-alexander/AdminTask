import { TestBed } from '@angular/core/testing';

import { WorkRole } from './work-role';

describe('WorkRole', () => {
  let service: WorkRole;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkRole);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
