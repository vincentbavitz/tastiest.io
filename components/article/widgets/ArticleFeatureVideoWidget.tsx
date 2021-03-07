import React from 'react';
import YouTube from 'react-youtube';

interface Props {
  video: string;
}

export function ArticleFeatureVideoWidget({ video }: Props) {
  console.log('ArticleFeatureVideoWidget ➡️ video:', video);

  const videoId = video
    ?.replace(
      /^(http[s]?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)/,
      '',
    )
    ?.slice(0, 11);

  return (
    <div className="w-full">
      cing elit. Soluta labore eius iure aliquid asperiores cum, quibusdam
      sapiente!
      <div
        style={{
          // Padding bottom of 56.25% corresponds to 16/9 aspect ratio
          paddingBottom: '56.25%',
        }}
        className="relative w-full h-0 overflow-hidden rounded-lg"
      >
        <YouTube
          videoId={videoId}
          className="absolute inset-0 w-full h-full"
          // Tracking -> user started video
          // onPlay={() => }
        />

        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary">
            <div
              style={{
                clipPath: 'polygon(100% 50%, 0 0, 0 100%)',
              }}
              className="w-8 h-10 ml-2 bg-white"
            ></div>
          </div>
        </div> */}
      </div>
      <div className="w-10/12 pl-2 mt-4 text-sm italic desktop:w-64 desktop:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore
        eius iure aliquid asperiores cum, quibusdam sapiente!
      </div>
    </div>
  );
}
