import '../assets/style.css';
import Link from 'next/link';

interface Props {
  href: string;
  image: string;
  altTag: string;
  title: string;
  paragraph: string;
  hashtags: string;
  hashtags2: string;
  hashtags3: string;
  sameSite?: string;
}

function BlogCardItem(props: Props): JSX.Element {
  const {
    href,
    image,
    altTag,
    title,
    paragraph,
    hashtags,
    hashtags2,
    hashtags3,
    sameSite,
  } = props;

  // Item to be used
  sameSite;

  return (
    <Link href={href}>
      <div className="rounded-lg overflow-hidden shadow-lg m-8 lg:w-3/12">
        <a>
          <img className="w-full" src={image} alt={altTag} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{paragraph}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {hashtags}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {hashtags2}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {hashtags3}
            </span>
          </div>
        </a>
      </div>
    </Link>
  );
}

function BlogCard() {
  return (
    <div>
      <BlogCardItem
        href="/best-indian-food"
        sameSite="None"
        image="https://media1.tenor.com/images/a9eedf74168980fc42c923b5f0af1827/tenor.gif"
        altTag="hello"
        title="Best Korma in London"
        paragraph="loren loren loren loren loren loren loren loren"
        hashtags="#indian"
        hashtags2="#curry"
        hashtags3="#chickenkorma"
      />
    </div>
  );
}

export default BlogCard;
