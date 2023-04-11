import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/interfaces/blogpost.interface';
import { PostsService } from 'src/app/shared/posts.service';

@Component({
  selector: 'app-featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.scss']
})
export class FeaturedPostsComponent implements OnInit {
  public posts!: BlogPost[];

  constructor(private postService: PostsService){
  }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}
