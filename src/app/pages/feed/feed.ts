import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FeedItem } from '../../feed-item';
import { FeedService } from '../../services/feed.service';

@Component({
  standalone: true,
  selector: 'app-feed',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './feed.html',
  styleUrl: './feed.css'
})

export class Feed {

  feeds: FeedItem[] = [];

  constructor(private router: Router, private feedService: FeedService) { 
    // call feed api endpoitn,set to allfeeds varaible
    this.getFeed();
  }

  getFeed() {
    this.feedService.getFeed().subscribe(res =>  {
      this.feeds = res.data;
      console.log('someth =>', this.feeds);
      
    })
  }

  newComment: { [id: number]: string } = {};

  addComment(postId: number) {
    const text = this.newComment[postId]?.trim();
    if (!text) return;
    this.newComment[postId] = '';
  }

  deletePost(id: number, type: 'article' | 'gif') {
    const key = type === 'article' ? 'articles' : 'gifs';
    const stored = localStorage.getItem(key);
    const posts = stored ? JSON.parse(stored) : [];

    const updated = posts.filter((p: any) => p.id !== id);
    localStorage.setItem(key, JSON.stringify(updated));

  }
  editPost(post: FeedItem) {
    localStorage.setItem('editingPost', JSON.stringify(post));
    this.router.navigate(['/post-article']);
  }
}
