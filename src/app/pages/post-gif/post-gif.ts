import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface GifPost {
  id: number;
  title: string;
  url: string;
  createdAt: number;          // for easy “most‑recent‑first” sorting
}

@Component({
  standalone: true,
  selector: 'app-post-gif',
  imports: [CommonModule, FormsModule],
  templateUrl: './post-gif.html',
  styleUrls: ['./post-gif.css'],
})
export class PostGif {
  gif: GifPost = { id: 0, title: '', url: '', createdAt: 0 };
  gifs: GifPost[] = [];      
  isEditing = false;         

  postGif() {
    if (!this.gif.title || !this.gif.url) {
      alert('Please provide both a title and a GIF URL.');
      return;
    }

    this.gifs.unshift({
      ...this.gif,
      id: Date.now(),
      createdAt: Date.now(),
    });

    alert('GIF posted successfully!');
    this.resetForm();
  }

  deleteGif(id: number) {
    const ok = confirm('Delete this GIF post?');
    if (ok) this.gifs = this.gifs.filter(g => g.id !== id);
  }

  private resetForm() {
    this.gif = { id: 0, title: '', url: '', createdAt: 0 };
  }
}
