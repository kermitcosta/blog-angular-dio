import { Component, Input } from '@angular/core';
import { BlogPost } from 'src/app/interfaces/blogpost.interface';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() post!: BlogPost;
}
