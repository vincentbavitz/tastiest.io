import { ContentfulClientApi, createClient } from 'contentful';
import moment from 'moment';
import CMS from '../constants/cms';
import {
  IAuthor,
  IDeal,
  IFigureImage,
  ILocation,
  IPost,
  IRestaurant,
} from '../types/cms';
import { CuisineSymbol } from '../types/cuisine';

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
    const entries = await this.client.getEntries({
      content_type: 'post',
      order: '-fields.date',
      limit: quantity,
      skip: (page - 1) * quantity,
      // Allows us to go N layers deep in nested JSON
      // https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/links
      include: 5,
    });

    if (entries?.items?.length > 0) {
      const blogPosts = entries.items.map(entry => this.convertPost(entry));
      return { posts: blogPosts, total: entries.total };
    }

    return { posts: [], total: 0 } as IFetchBlogEntriesReturn;
  }

  public async fetchPostBySlug(slug: string): Promise<IPost> {
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

  public fetchRestaurantsOfOrganisation(organisationID: string) {
    organisationID;
    return null;
  }

  private convertImage = (rawImage): IFigureImage =>
    rawImage
      ? {
          imageUrl: rawImage.file.url.replace('//', 'https://'), // may need to put null check as well here
          description: rawImage.description ?? null,
          title: rawImage.title ?? null,
        }
      : null;

  private convertAuthor = (rawAuthor): IAuthor =>
    rawAuthor
      ? {
          name: rawAuthor?.name ?? null,
          profileImage: this.convertImage(rawAuthor.profileImage.fields),
          bio: rawAuthor?.bio ?? null,
          position: rawAuthor?.position ?? null,
          email: rawAuthor?.email ?? null,
        }
      : null;

  private convertDeal = (rawDeal): IDeal =>
    rawDeal
      ? {
          id: rawDeal.sys.id ?? null,
          tagline: rawDeal?.fields?.tagline ?? null,
          includes: rawDeal?.fields?.tags ?? [],
          pricePerHeadGBP: rawDeal?.fields?.price ?? null,
          image: this.convertImage(rawDeal?.image?.fields),
        }
      : null;

  private convertLocation = (rawLocation): ILocation =>
    rawLocation
      ? {
          address: rawLocation.fields.address,
          lat: rawLocation.fields.coordinates.lat,
          lon: rawLocation.fields.coordinates.lon,
        }
      : null;

  private convertCuisines = (rawCuisines): CuisineSymbol[] =>
    rawCuisines
      ? rawCuisines
          .map?.(c => CuisineSymbol[c?.fields?.name?.toUpperCase()] ?? null)
          .filter(c => Boolean(c))
      : null;

  private convertRestaurant = (rawRestaurant): IRestaurant => {
    console.log('cms ➡️ rawRestaurant:', rawRestaurant.fields.cuisines);

    return rawRestaurant
      ? {
          id: rawRestaurant.sys.id ?? null,
          name: rawRestaurant.fields.name,
          website: rawRestaurant.fields.website,
          businessType: rawRestaurant.fields.businessType,
          location: this.convertLocation(rawRestaurant.fields.location),
          cuisines: this.convertCuisines(rawRestaurant.fields.cuisines),
        }
      : null;
  };

  private convertPost = (rawData): IPost => {
    const rawPost = rawData.fields;
    const rawFeatureImage = rawPost?.featureImage?.fields;
    const rawAuthor = rawPost.author ? rawPost.author.fields : null;
    const rawCuisine = rawPost.cuisine
      ? rawPost.cuisine?.fields?.name.toUpperCase()
      : null;

    return rawPost
      ? {
          id: rawData.sys.id ?? null,
          title: rawPost.title ?? null,
          description: rawPost.description ?? null,
          body: rawPost.body ?? null,
          author: this.convertAuthor(rawAuthor),
          date: moment(rawPost.date).format('DD MMMM YYYY'),
          city: rawPost.city ?? null,
          dishName: rawPost.dishName ?? null,
          video: rawPost.video ?? null,
          cuisine: CuisineSymbol[rawCuisine] ?? null,
          deal: this.convertDeal(rawPost.deal),
          restaurant: this.convertRestaurant(rawPost.restaurant),
          featureImage: this.convertImage(rawFeatureImage),
          tags: rawPost?.tags ?? [], //?.map(t => t?.fields?.label) ?? [],
          slug: rawPost.slug,
        }
      : null;
  };
}
