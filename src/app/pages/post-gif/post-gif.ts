import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GifPost } from '../../GifPost';

@Component({
  standalone: true,
  selector: 'app-post-gif',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './post-gif.html',
  styleUrls: ['./post-gif.css'],
})
export class PostGif {
  gif: GifPost = {
    id: 0,
    title: '',
    url: '',
    createdAt: 0,
    comments: []
  };

  gifs: GifPost[] = []; //list of posted GIFs

  //stores the new comment text per gif ID
  newComment: { [key: number]: string } = {};

  isEditing = false;

  postGif() {
    if (!this.gif.title || !this.gif.url) {
      alert('Please provide both a title and a GIF URL.');
      return;
    }

    // adds new GIF with time and empty comments array
    this.gifs.unshift({
      ...this.gif,
      id: Date.now(),
      createdAt: Date.now(),
      comments: []
    });

    alert('GIF posted successfully!');
    this.resetForm();
  }

  deleteGif(id: number) {
    const ok = confirm('Delete this GIF post?');
    if (ok) {
      this.gifs = this.gifs.filter(g => g.id !== id);
    }
  }

  // adding a new comment to the correct GIF
  addComment(gifId: number) {
    const comment = this.newComment[gifId];
    if (!comment) return;

    const gif = this.gifs.find(g => g.id === gifId);
    if (gif) {
      gif.comments.push(comment); // adds comment
    }

    this.newComment[gifId] = ''; // clears input field
  }

  private resetForm() {
    // rest gif form (including empty comment array)
    this.gif = { id: 0, title: '', url: '', createdAt: 0, comments: [] };
  }
}
