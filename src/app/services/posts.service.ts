import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';

@Injectable()
export class PostsService {
  posts: Post[];

  constructor() {}
}
