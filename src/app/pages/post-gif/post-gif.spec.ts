import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGif } from './post-gif';

describe('PostGif', () => {
  let component: PostGif;
  let fixture: ComponentFixture<PostGif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostGif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostGif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
