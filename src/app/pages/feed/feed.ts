import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FeedItem } from '../../feed-item';

@Component({
  standalone: true,
  selector: 'app-feed',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './feed.html',
  styleUrl: './feed.css'
})

export class Feed {

  constructor(private router: Router) {}

  //test data.... replace later

  feed: FeedItem[] = [
    {
      id: 1,
      type: 'article',
      title: 'My First Article',
      content: 'This is the content of an article.',
      createdAt: Date.now() - 10000,
      comments: ['Great post!']
    },
    {
      id: 2,
      type: 'gif',
      title: 'Funny Dog',
      url: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
      createdAt: Date.now(),
      comments: ['So funny ']
    }
  ];

  newComment: { [id: number]: string } = {};

  addComment(postId: number) {
    const text = this.newComment[postId]?.trim();
    if (!text) return;

    const post = this.feed.find(p => p.id === postId);
    if (post) post.comments.push(text);

    this.newComment[postId] = '';
  }

  deletePost(id: number, type: 'article' | 'gif') {
  const key = type === 'article' ? 'articles' : 'gifs';
  const stored = localStorage.getItem(key);
  const posts = stored ? JSON.parse(stored) : [];

  const updated = posts.filter((p: any) => p.id !== id);
  localStorage.setItem(key, JSON.stringify(updated));

  // Also remove from in-memory feed
  this.feed = this.feed.filter(p => p.id !== id);
}

editPost(item: any) {
  const route = item.type === 'article' ? `/post-article` : `/post-gif`;
  // Optionally store the post temporarily for editing
  localStorage.setItem('editingPost', JSON.stringify(item));
  this.router.navigate([route]);
}


}