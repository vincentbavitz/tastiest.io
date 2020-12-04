import { ILocation } from '../../../types/article';

interface Props {
  size?: 'default' | 'full';
  location: ILocation;
}

export function ArticleWidgetMap(props: Props) {
  const { size = 'default', location } = props;
  const { lat, lng } = location;

  return (
    <div className="border-4 border-primary rounded-xl overflow-hidden">
      <img src="/map.png" />
    </div>
  );
}
