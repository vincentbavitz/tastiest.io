import HeartPrimarySVG from '../../../assets/svgs/heart-primary.svg';
import ShareSVG from '../../../assets/svgs/share.svg';

interface Props {
  articleId: string;
  articleUrl: string;
}

export function ArticleSaveShareWidget(props: Props) {
  const { articleId, articleUrl } = props;

  return (
    <div className="flex bg-white bg-opacity-75 rounded-md text-primary">
      <div className="flex flex-1 items-center px-2 py-1 space-x-1">
        <HeartPrimarySVG className="h-8" />
        <span>Save</span>
      </div>
      <div className="flex flex-1 items-center px-2 py-1">
        <ShareSVG className="h-8" />
        <span>Share</span>
      </div>
    </div>
  );
}
