import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() createdAt: Date;
  @Input() content: string;
  loveIt: number;

  constructor() { }

  ngOnInit(): void {
    this.loveIt = 0;
  }

  doLoveIt(): void {
    this.loveIt++;
  }

  dontLoveIt(): void {
    this.loveIt--;
  }
}
