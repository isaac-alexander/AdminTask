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

  articles: (Article & { id: number })[] = [];
  editingPost: (Article & { id: number }) | null = null;

  constructor(private articleService: ArticleService) { }


  postArticle() {
    if (!this.article.title || !this.article.content) return;

    this.articleService.postArticle(this.article).subscribe({
      next: (res: ArticleResponse) => {
        console.log('Article posted:', res.data);

        const newArticle: Article & { id: number } = {
          id: res.data.articleId,
          title: res.data.title,
          content: res.data.article,
        };

        this.articles.unshift(newArticle);
        this.article = { title: '', content: '' };
      },
      error: (err) => {
        console.error('Failed to post article:', err);
      },
    });
  }

  editArticle(article: Article & { id: number }) {
    this.article = { title: article.title, content: article.content };
    this.editingPost = article;
  }

  updateArticle() {
    if (!this.article.title || !this.article.content || !this.editingPost) return;

    const articleToUpdate = {
      id: this.editingPost!.id,
      title: this.article.title,
      content: this.article.content
    };

    this.articleService.updateArticle(articleToUpdate).subscribe({
      next: (res: ArticleResponse) => {
        console.log('Article updated successfully:', res.data);

        const index = this.articles.findIndex(a => a.id === this.editingPost!.id);
        if (index > -1) {
          this.articles[index] = {
            id: this.editingPost!.id,
            title: this.article.title,
            content: this.article.content
          };
        }

        this.article = { title: '', content: '' };
        this.editingPost = null;
      },
      error: (err) => {
        console.error('Failed to update article:', err);
      },
    });
  }


}
