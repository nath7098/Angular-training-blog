export class Post {
  loveIt: number;

  constructor(
    public title: string,
    public content: string,
    public createdAt: Date
  ) {}
}
