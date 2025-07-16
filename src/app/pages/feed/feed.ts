import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
}