import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GifPost } from '../../GifPost';

@Component({
  standalone: true,
  selector: 'app-view-gif',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './view-gif.html',
  styleUrl: './view-gif.css',
})
export class ViewGif {
  gif: GifPost | null = null;
  newComment = '';

  constructor(private route: ActivatedRoute) {
    const gifId = Number(this.route.snapshot.paramMap.get('id'));
    const stored = localStorage.getItem('gifs');
    const gifs: GifPost[] = stored ? JSON.parse(stored) : [];

    this.gif = gifs.find(g => g.id === gifId) || null;
  }

  addComment() {
    if (!this.gif || !this.newComment.trim()) return;

    this.gif.comments.push(this.newComment.trim());

    const stored = localStorage.getItem('gifs');
    let gifs: GifPost[] = stored ? JSON.parse(stored) : [];

    const index = gifs.findIndex(g => g.id === this.gif!.id);
    if (index !== -1) {
      gifs[index] = this.gif;
      localStorage.setItem('gifs', JSON.stringify(gifs));
    }

    this.newComment = '';
  }
}
