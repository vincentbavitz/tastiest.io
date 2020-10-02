import { Tag } from '../objects';

// The return type of an article fetched from SanityIO
export interface ISanityArticle {
  id: string;
  updatedAt: string;
  title: string;
  subtitle: string;
  author: { name: string; imageSrc: string };
  publishedAt: string;
  city: string;
  tags: Array<Tag>;
  restaurantName: string;
  backdropSVG: string;
  dishName: string;
  body: string;
  video: { link: string; description: string };
  location: { lat: number; lng: number };
  cuisine: string;
  slug: string;
  paragraph: string;
  featureImage: { source: string; altText: string; description: string };
}
