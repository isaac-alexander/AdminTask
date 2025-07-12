import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostArticle } from './post-article';

describe('PostArticle', () => {
  let component: PostArticle;
  let fixture: ComponentFixture<PostArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostArticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
