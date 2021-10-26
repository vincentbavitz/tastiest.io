import { Media } from '@tastiest-io/tastiest-utils';

interface Props {
  featureImage: Media;
}

export function ArticleSectionFeatureImage({ featureImage }: Props) {
  return (
    <div className="pb-4">
      <div className="relative w-full mb-4 overflow-hidden bg-gray-300 rounded-xl aspect-w-16 aspect-h-9">
        <div className="absolute inset-0">
          <img
            src={`${featureImage?.url}?w=600`}
            alt={featureImage?.description}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="w-8/12 text-sm italic">{featureImage?.description}</div>
    </div>
  );
}
