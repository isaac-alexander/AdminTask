import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Article } from '../../Article';
import { ArticleService } from '../../services/article.service';
import { ArticleResponse } from '../../ArticleResponse';

@Component({
  standalone: true,
  selector: 'app-post-article',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './post-article.html',
  styleUrls: ['./post-article.css'],
})
export class PostArticle {
  article: Article = {
    title: '',
    content: '',
  };
  constructor(private articleService: ArticleService) { }


  postArticle() {
    if (!this.article.title || !this.article.content) return;

    this.articleService.postArticle(this.article).subscribe({
      next: (res: ArticleResponse) => {
        console.log('Article posted:', res.data);
        this.article = { title: '', content: '' };
      },
      error: (err) => {
        console.error('Failed to post article:', err);
      }
    });
  }

  
}
