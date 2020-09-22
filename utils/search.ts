import { Hashtag } from '../objects';
import { IArticle } from '../types/article';

export async function search(query: string): Array<IArticle> {
  // regrh

  return [
    {
      href: '',
      image: '',
      altTag: '',
      title: '',
      paragraph: '',
      hashtags: [new Hashtag('qwerkeqwjrqwlkehr')],
    },
  ];
}

// const query = groq`*[_type == "post" && slug.current == $slug][0]{
//     title,
//     subtitle,
//     "name": author->name,
//     "authorImage": author->image,
//     publishedAt,
//     cuisine,
//     "city": city->title,
//     "tags": tags[]->title,
//     location,
//     restaurantName,
//     dishName,
//     mainImage,
//     backdropSVG,
//     video,
//     body,
//   }`;
