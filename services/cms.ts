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

interface IFetchPostsReturn {
  posts: Array<IPost>;
  total: number;
}

// Turns CMS IDs into slugs
export const slugify = (id: string) => id?.replace(/_/g, '-').toLowerCase();
export const unslugify = (slug: string) =>
  slug.replace(/-/g, '_').toUpperCase();

export class CmsApi {
  [x: string]: any;
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    });
  }

  public async getPosts(
    quantity = CMS.BLOG_RESULTS_PER_PAGE,
    page = 1,
  ): Promise<IFetchPostsReturn> {
    const entries = await this.client.getEntries({
      content_type: 'post',
      order: '-fields.date',
      limit: quantity,
      skip: (page - 1) * quantity,
      // Allows us to go N layers deep in nested JSON
      // https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/links
      include: 8,
    });

    if (entries?.items?.length > 0) {
      const blogPosts = entries.items.map(entry => this.convertPost(entry));
      return { posts: blogPosts, total: entries.total };
    }

    return { posts: [], total: 0 } as IFetchPostsReturn;
  }

  public async getPostsByTag(
    tag: string,
    quantity = CMS.BLOG_RESULTS_PER_PAGE,
    page = 1,
  ): Promise<IFetchPostsReturn> {
    const entries = await this.client.getEntries({
      content_type: 'post',
      order: '-fields.date',
      'fields.tags[in]': tag,
      limit: quantity,
      skip: (page - 1) * quantity,
      include: 8,
    });

    if (entries?.items?.length > 0) {
      const posts = entries.items.map(entry => this.convertPost(entry));
      return { posts, total: entries.total };
    }

    return { posts: [], total: 0 } as IFetchPostsReturn;
  }

  public async getPostBySlug(slug: string): Promise<IPost> {
    const entries = await this.client.getEntries({
      content_type: 'post',
      // 'fields.slug[in]': slug,
      limit: 1,
      include: 8,
    });

    if (entries?.items?.length > 0) {
      const post = this.convertPost(entries.items[0]);
      return post;
    }

    return null;
  }

  public async getPostsOfSlugs(
    slugs: Array<string>,
    quantity = CMS.BLOG_RESULTS_PER_PAGE,
    page = 1,
  ): Promise<IFetchPostsReturn> {
    console.log('cms ➡️ slugs:', slugs);

    const entries = await this.client.getEntries({
      content_type: 'post',
      order: '-fields.date',
      limit: quantity,
      skip: (page - 1) * quantity,
      include: 8,
      'fields.slug[in]': slugs?.join(','),
    });

    console.log('cms ➡️ entries:', entries);

    if (entries?.items?.length > 0) {
      const posts = entries.items.map(entry => this.convertPost(entry));
      return { posts, total: entries.total };
    }

    return { posts: [], total: 0 } as IFetchPostsReturn;
  }

  public async getPostsOfCuisine(
    cuisine: CuisineSymbol,
    quantity = CMS.BLOG_RESULTS_PER_PAGE,
    page = 1,
  ): Promise<IFetchPostsReturn> {
    const cuisineToMatch = cuisine.toLowerCase();

    const entries = await this.client.getEntries({
      content_type: 'post',
      order: '-fields.date',
      limit: quantity,
      skip: (page - 1) * quantity,
      include: 8,
      'fields.cuisine.fields.name[in]': cuisineToMatch,
    });

    console.log('cms ➡️ entries:', entries);

    if (entries?.items?.length > 0) {
      const posts = entries.items.map(entry => this.convertPost(entry));
      return { posts, total: entries.total };
    }

    return { posts: [], total: 0 } as IFetchPostsReturn;
  }

  public async getRestaurantsOfOrganisation(organisationID: string) {
    organisationID;
    return null;
  }

  public async searchPosts(
    query: string,
    quantity = CMS.BLOG_RESULTS_PER_PAGE,
    page = 1,
  ): Promise<IFetchPostsReturn> {
    const entries = await this.client.getEntries({
      content_type: 'post',
      order: '-fields.date',
      limit: quantity,
      skip: (page - 1) * quantity,
      // Allows us to go N layers deep in nested JSON
      // https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/links
      include: 8,
      'fields.title[match]': query.trim().toLowerCase(),
    });

    if (entries?.items?.length > 0) {
      const blogPosts = entries.items.map(entry => this.convertPost(entry));
      return { posts: blogPosts, total: entries.total };
    }

    return { posts: [], total: 0 } as IFetchPostsReturn;
  }

  public async getCuisinePosts(cuisine: CuisineSymbol, limit: number) {
    // const query = groq`
    //     *[_type == "post" && cuisine->title match "${titleCase(cuisine)}"][0..${
    //   limit ?? 100
    // }]|order(publishedAt desc) {
    //       ${sanityPostQuery}
    //     }
    //   `;

    // let posts: Array<ISanityArticle>;

    // try {
    //   posts = await client.fetch(query);
    //   console.log('Posts', posts);
    // } catch (error) {
    //   console.warn('Error:', error);
    // }

    // return posts;

    return [];
  }

  public async getTopPosts(limit?: number) {
    // const query = groq`
    //   *[_type == "post"][0..${(limit ?? 100) - 1}]|order(publishedAt desc) {
    //     ${sanityPostQuery}
    //   }
    // `;

    // let posts: Array<ISanityArticle>;

    // try {
    //   posts = await client.fetch(query);
    //   console.log('Posts', posts);
    // } catch (error) {
    //   console.warn('Error:', error);
    // }

    // return posts;

    return [];
  }

  public getDeal = async (dealId: string): Promise<IDeal> => {
    const entry = await this.client.getEntry(dealId);
    const deal = this.convertDeal(entry);

    return deal ?? null;
  };

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
          restaurant: this.convertRestaurant(rawDeal?.fields?.restaurant),
          tagline: rawDeal?.fields?.tagline ?? null,
          includes: rawDeal?.fields?.tags ?? [],
          pricePerHeadGBP: rawDeal?.fields?.price ?? null,
          image: this.convertImage(rawDeal?.fields?.image?.fields),
        }
      : null;

  private convertLocation = (rawLocation): ILocation =>
    rawLocation
      ? {
          address: rawLocation?.fields?.address ?? null,
          lat: rawLocation?.fields?.coordinates.lat ?? null,
          lon: rawLocation?.fields?.coordinates.lon ?? null,
        }
      : null;

  private convertCuisines = (rawCuisines): CuisineSymbol[] =>
    rawCuisines
      ? rawCuisines
          .map?.(c => CuisineSymbol[c?.fields?.name?.toUpperCase()] ?? null)
          .filter(c => Boolean(c))
      : null;

  private convertRestaurant = (rawRestaurant): IRestaurant => {
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
