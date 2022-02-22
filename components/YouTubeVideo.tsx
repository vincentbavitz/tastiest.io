import clsx from 'clsx';
import React from 'react';
import YouTube from 'react-youtube';

interface Props {
  url: string;
  rounded?: boolean;
}

export function YouTubeVideo(props: Props) {
  const { url, rounded = true } = props;

  const videoId = url
    ?.replace(
      /^(http[s]?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)/,
      '',
    )
    ?.slice(0, 11);

  return (
    <div className="w-full">
      <div
        className={clsx(
          'relative w-full overflow-hidden bg-gray-200 bg-opacity-25 aspect-w-16 aspect-h-9',
          rounded && 'rounded-md',
        )}
      >
        <YouTube
          videoId={videoId}
          className="absolute inset-0 w-full h-full"
          // Tracking -> user started video
          // onPlay={() => }
        />
      </div>
    </div>
  );
}
