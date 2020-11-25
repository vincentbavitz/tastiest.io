export interface IAuthor {
  name: string;
  imageSrc: string;
}

export interface IVideo {
  link: string;
  description: string;
}

export interface ILocation {
  lat: number;
  lng: number;
}

export interface IFigureImage {
  source: string;
  altText: string;
  description: string;
}

// The return type of an article fetched from SanityIO
export interface ISanityArticle {
  id: string;
  updatedAt: string;
  title: string;
  subtitle: string;
  author: IAuthor;
  publishedAt: string;
  city: string;
  tags: Array<string>;
  restaurantName: string;
  backdropSVG: string;
  dishName: string;
  body: string;
  video: IVideo;
  location: ILocation;
  cuisine: string;
  slug: string;
  paragraph: string;
  featureImage: IFigureImage;
}

// The type of ArticleProps; only essential article information
export interface IArticle {
  slug: string;
  title: string;
  subtitle: string;
  author: IAuthor;
  date: string;
  city: string;
  tags: Array<string>;
  restaurantName: string;
  dishName: string;
  body: string;
  video: string;
  location: ILocation;
  cuisine: string;
  paragraph: string;
  featureImage: IFigureImage;
}
