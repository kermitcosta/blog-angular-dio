import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/interfaces/blogpost.interface';
import { PostsService } from 'src/app/shared/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  public post!: BlogPost;

  constructor(private route: ActivatedRoute, private postService: PostsService) {}

  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      this.post = this.postService.getPost(param['slug']);
    });
  }
}
