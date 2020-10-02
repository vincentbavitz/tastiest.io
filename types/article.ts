import { Hashtag } from '../objects';

// The return type of an article fetched from SanityIO
export interface ISanityArticle {
  city: string;
  cuisine: string;
  slug: { _type: string; current: string };
  imageUrl: string;
  altTag: string;
  title: string;
  paragraph: string;
  hashtags: Array<Hashtag>; // Max 5
}
