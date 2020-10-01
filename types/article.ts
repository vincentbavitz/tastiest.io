import { Hashtag } from '../objects';

export interface IArticle {
  href: string;
  imageUrl: string;
  altTag: string;
  title: string;
  paragraph: string;
  hashtags: Array<Hashtag>; // Max 5
}
