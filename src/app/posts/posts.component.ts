import { BadRequest } from './../common/bad-request';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => { this.posts = posts; });
  }

  createPost(input: HTMLInputElement) {
    let post: any = {
      userId: 1,
      title: input.value,
      body: 'New Post BODY'
    };
    //Optimistic Update
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe({
        next: newPost => {
        console.log(newPost);
        //post['id'] = newPost.id;
        },
        error: (error: AppError) => {
          this.posts.splice(0, 1);

          if(error instanceof BadRequest){
            //this.form.setError(error.originalError);
          }else throw error;
        }
    });
  }

  updatePost(post: any) {
    this.service.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost);
      });
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe({
        next: () => {},
        error: (error: HttpErrorResponse) => {
          this.posts.splice(index, 0, post);

          if(error instanceof NotFoundError) {
            alert('This Post has been already Deleted.');
          }else throw error;
        }
      });
  }
}
