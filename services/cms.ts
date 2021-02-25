import { ContentfulClientApi, createClient } from 'contentful';
import moment from 'moment';
import { CMS } from '../constants';
import {
  IAuthor,
  IDeal,
  IFigureImage,
  ILocation,
  IPost,
  IRestaurant,
} from '../types/cms';

interface IFetchBlogEntriesReturn {
  posts: Array<IPost>;
  total: number;
}

// Turns CMS IDs into slugs
export const slugify = (id: string) => id?.replace(/_/g, '-').toLowerCase();
export const unslugify = (slug: string) =>
  slug.replace(/-/g, '_').toUpperCase();

export class CmsApi {
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
  }

  public async fetchBlogEntries(
    quantity = CMS.BLOG_RESULTS_PER_PAGE,
    page = 1,
  ): Promise<IFetchBlogEntriesReturn> {
    console.log('cms ➡️ page:', page);
    console.log('cms ➡️ quantity:', quantity);
    console.log('cms ➡️ (page - 1) * quantity:', (page - 1) * quantity);

    try {
      const entries = await this.client.getEntries({
        content_type: 'post', // only fetch blog post entry
        order: '-fields.date',
        limit: quantity,
        skip: (page - 1) * quantity,
      });

      if (entries && entries.items && entries.items.length > 0) {
        const blogPosts = entries.items.map(entry => this.convertPost(entry));
        return { posts: blogPosts, total: entries.total };
      }

      return { posts: [], total: 0 } as IFetchBlogEntriesReturn;
    } catch (e) {
      return { posts: [], total: 0 } as IFetchBlogEntriesReturn;
    }
  }

  public async fetchBlogById(id): Promise<IPost> {
    return this.client.getEntry(id).then(entry => {
      if (entry) {
        return this.convertPost(entry);
      }
      return null;
    });
  }

  public async fetchBlogBySlug(slug: string): Promise<IPost> {
    const entries = await this.client.getEntries({
      content_type: 'post',
      'fields.slug': slug,
    });

    if (entries?.items?.length > 0) {
      const post = this.convertPost(entries.items[0]);
      return post;
    }

    return null;
  }

  public async fetchBlogEntriesByTag(
    tag: string,
    quantity = CMS.BLOG_RESULTS_PER_PAGE,
    page = 1,
  ): Promise<IFetchBlogEntriesReturn> {
    const entries = await this.client.getEntries({
      content_type: 'post',
      order: '-fields.date',
      'fields.tags[in]': tag,
      limit: quantity,
      skip: (page - 1) * quantity,
    });

    if (entries?.items?.length > 0) {
      const posts = entries.items.map(entry => this.convertPost(entry));
      return { posts, total: entries.total };
    }

    return { posts: [], total: 0 } as IFetchBlogEntriesReturn;
  }

  public convertImage = (rawImage): IFigureImage =>
    rawImage
      ? {
          imageUrl: rawImage.file.url.replace('//', 'https://'), // may need to put null check as well here
          description: rawImage.description ?? null,
          title: rawImage.title ?? null,
        }
      : null;

  public convertAuthor = (rawAuthor): IAuthor =>
    rawAuthor
      ? {
          name: rawAuthor?.name ?? null,
          profileImage: this.convertImage(rawAuthor.profileImage.fields),
          bio: rawAuthor?.bio ?? null,
          position: rawAuthor?.position ?? null,
          email: rawAuthor?.email ?? null,
        }
      : null;

  public convertDeal = (rawDeal): IDeal =>
    rawDeal
      ? {
          id: rawDeal.sys.id ?? null,
          tagline: rawDeal.tagline ?? null,
          includes: rawDeal.tags ?? null,
          pricePerHeadGBP: rawDeal.price ?? null,
          image: this.convertImage(rawDeal?.image?.fields),
        }
      : null;

  public convertLocation = (rawLocation): ILocation =>
    rawLocation
      ? {
          address: rawLocation.address,
          lat: rawLocation.lat,
          lng: rawLocation.lng,
        }
      : null;

  public convertRestaurant = (rawRestaurant): IRestaurant =>
    rawRestaurant
      ? {
          id: rawRestaurant.sys.id ?? null,
          name: rawRestaurant.name,
          website: rawRestaurant.website,
          businessType: rawRestaurant.businessType,
          locations: rawRestaurant.locations?.map?.(location =>
            this.convertLocation(location),
          ),
          cuisines: rawRestaurant.cuisines?.map?.(
            cuisine => cuisine.sys?.name ?? null,
          ),
        }
      : null;

  public convertPost = (rawData): IPost => {
    const rawPost = rawData.fields;
    const rawFeatureImage = rawPost?.featureImage?.fields;
    const rawAuthor = rawPost.author ? rawPost.author.fields : null;

    return {
      id: rawData.sys.id ?? null,
      title: rawPost.title,
      description: rawPost.description ?? null,
      body: rawPost.body ?? null,
      author: this.convertAuthor(rawAuthor),
      date: moment(rawPost.date).format('DD MMMM YYYY'),
      city: rawPost.city ?? null,
      dishName: rawPost.dishName ?? null,
      video: rawPost.video ?? null,
      cuisine: rawPost.cuisine?.sys?.name ?? null,
      deal: this.convertDeal(rawData.deal),
      restaurant: this.convertRestaurant(rawData.restaurant),
      featureImage: this.convertImage(rawFeatureImage),
      tags: rawPost?.tags, //?.map(t => t?.fields?.label) ?? [],
      slug: rawPost.slug,
    };
  };
}
