import groq from 'groq';
import { useRouter } from 'next/dist/client/router';
import client from '../../client';
import { IPost } from '../../types/post';

function CityPosts(props: Array<IPost>) {
  const router = useRouter();
  const { pid } = router.query;

  console.log('Pid', pid);

  return <></>;
}

CityPosts.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const query = groq`*[_type == "post" && city->title == ][0..20] {
    title,
    subtitle,
    "name": author->name,''
    "authorImage": author->image,
    publishedAt,
    cuisine,
    "city": city->title,
    "tags": tags[]->title,
    location,
    restaurantName,
    dishName,
    mainImage,
    backdropSVG,
    video,
    body,
  }`;

  const { slug = '' } = context.query;

  let posts;
  try {
    posts = await client.fetch(query, { slug });
  } catch (error) {
    console.warn('Error:', error);
  }

  return posts;
};

export default CityPosts;
