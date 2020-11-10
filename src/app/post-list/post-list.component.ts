import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis rutrum dui a tempor. Sed sit amet pretium diam, eu vestibulum justo.';

  postList = [
    {
      title: 'Mon premier post',
      created_at: new Date(),
      content: this.LIPSUM,
      loveIts: 0,
    },
    {
      title: 'Mon deuxième post',
      created_at: new Date(),
      content: this.LIPSUM,
      loveIts: 0,
    },
    {
      title: 'Encore un post',
      created_at: new Date(),
      content: this.LIPSUM,
      loveIts: 0,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
