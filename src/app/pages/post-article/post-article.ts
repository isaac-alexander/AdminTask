import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Article } from '../../Article';

@Component({
  standalone: true,
  selector: 'app-post-article',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './post-article.html',
  styleUrls: ['./post-article.css'],
})
export class PostArticle {
  articles: Article[] = [];

  article: Article = { id: 0, title: '', content: '', comments: [] };

  newComment: { [id: number]: string } = {};

  isEditing = false;

  postOrUpdateArticle() {
    if (!this.article.title || !this.article.content) {
      alert('Both title and content are required.');
      return;
    }

    if (this.isEditing) {
      const index = this.articles.findIndex(a => a.id === this.article.id);
      if (index !== -1) {
        this.articles[index] = { ...this.article };
        alert('Article updated successfully!');
      }
      this.isEditing = false;
    } else {
      // newest is first
      const newId = Date.now();
      this.articles.unshift({ ...this.article, id: newId, comments: [] }); // unshift inserts new elements at the start of an array, and returns the new length of the array
      alert('Article posted successfully!');
    }

    this.article = { id: 0, title: '', content: '', comments: [] };
  }

  editArticle(selected: Article) {
    this.article = { ...selected };
    this.isEditing = true;
  }

  deleteArticle(id: number) {
    const confirmDelete = confirm('Are you sure you want to delete this article?');
    if (confirmDelete) {
      this.articles = this.articles.filter(a => a.id !== id);
    }
  }

  //  add comment to the selected article
  addComment(articleId: number) {
    const comment = this.newComment[articleId]?.trim();
    if (!comment) return;

    const article = this.articles.find(a => a.id === articleId);
    if (article) {
      article.comments.push(comment);
      this.newComment[articleId] = '';
    }
  }
}
