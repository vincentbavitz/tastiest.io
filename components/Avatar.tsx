import classNames from 'classnames';
import LogoSVG from '../assets/svgs/logo.svg';

interface Props {
  // Size is in the same units as Tailwind units
  size?: 8 | 10 | 12 | 16 | 20;
  imageSrc?: string;
  onClick?(): void;
}
export function Avatar(props: Props) {
  const { size = '8', imageSrc, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={classNames(
        'relative flex justify-center items-center rounded-full cursor-pointer duration-300 bg-opacity-75 hover:bg-opacity-100',
        !imageSrc && 'bg-primary',
        `h-${size} w-${size}`,
      )}
    >
      {imageSrc ? (
        // Custom Avatar Image
        <img
          className="w-full h-full rounded-full"
          src={imageSrc}
          alt={'Author profile picture'}
        />
      ) : (
        // Default Tastiest Avatar
        <LogoSVG
          className="text-white fill-current"
          style={{ height: '55%', marginTop: '15%' }}
        />
      )}
    </div>
  );
}
