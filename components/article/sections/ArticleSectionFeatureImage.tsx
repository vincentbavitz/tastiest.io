import { useArticle } from '../../../hooks/article';

export function ArticleSectionFeatureImage() {
  const { featureImage } = useArticle();

  return (
    <div className="my-10">
      <div
        style={{ paddingBottom: '40%' }}
        className="relative w-full h-0 mb-4 bg-gray-300 rounded-md overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={featureImage.source}
            alt={featureImage.altText}
            style={{ objectFit: 'cover' }}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="w-8/12 italic text-sm">{featureImage.description}</div>
    </div>
  );
}
