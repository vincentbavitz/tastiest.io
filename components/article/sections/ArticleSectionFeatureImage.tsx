import { IFigureImage } from 'types/cms';

interface Props {
  featureImage: IFigureImage;
}

export function ArticleSectionFeatureImage({ featureImage }: Props) {
  return (
    <div className="pb-4 my-10 desktop:pb-0">
      <div
        style={{ paddingBottom: '40%' }}
        className="relative w-full h-0 mb-4 overflow-hidden bg-gray-300 rounded-md"
      >
        <div className="absolute inset-0">
          <img
            src={featureImage?.imageUrl}
            alt={featureImage?.description}
            style={{ objectFit: 'cover' }}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="w-8/12 text-sm italic">{featureImage?.description}</div>
    </div>
  );
}
