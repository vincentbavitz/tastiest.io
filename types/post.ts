export interface IPost {
  title: string;
  subtitle: string;
  name: string;
  authorImage: any;
  publishedAt: string;
  cuisine: string;
  city: string;
  // tags: Array<string>;
  tags: any;
  location: {
    lat: number;
    lng: number;
    _type: string;
  };
  restaurantName: string;
  dishName: string;
  mainImage: any;
  backdropSVG: any;
  video: {
    link: string;
    description: string;
  };
  body: Array<any>;

  // Meta
  slug: {
    current: string;
    _type: 'slug';
  };
  _id: string;
  _updatedAt: string;
}
