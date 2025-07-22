import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../Article';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-view-article',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './view-article.html',
  styleUrl: './view-article.css'
})

export class ViewArticle {
  article: Article | null = null;
  newComment: string = '';

  constructor(private route: ActivatedRoute) {
    const articleId = Number(this.route.snapshot.paramMap.get('id'));

    const stored = localStorage.getItem('articles');
    const articles: Article[] = stored ? JSON.parse(stored) : [];

    // this.article = articles.find(a => a.id === articleId) || null;
  }

  // addComment() {
  //   if (!this.article || !this.newComment.trim()) return;

  //   this.article.comments.push(this.newComment.trim());

  //   const stored = localStorage.getItem('articles');
  //   let articles: Article[] = stored ? JSON.parse(stored) : [];

  //   const index = articles.findIndex(a => a.id === this.article!.id);
  //   if (index !== -1) {
  //     articles[index] = this.article;
  //     localStorage.setItem('articles', JSON.stringify(articles));
  //   }

  //   this.newComment = '';
  // }
}