import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Article {
  id: number;
  title: string;
  content: string;
}

@Component({
  standalone: true,
  selector: 'app-post-article',
  imports: [CommonModule, FormsModule],
  templateUrl: './post-article.html',
  styleUrls: ['./post-article.css'],
})
export class PostArticle {
  articles: Article[] = [];
  article: Article = { id: 0, title: '', content: '' };
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
      const newId = Date.now();
      this.articles.push({ ...this.article, id: newId });
      alert('Article posted successfully!');
    }

    this.article = { id: 0, title: '', content: '' };
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

}
