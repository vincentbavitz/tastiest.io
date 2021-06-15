import classNames from 'classnames';

interface Props {
  center?: boolean;
}

export function SignInTosInfo({ center }: Props) {
  return (
    <div className={classNames('text-xs', center && 'text-center')}>
      By proceeding, you agree to our{' '}
      <a
        href="/terms-of-use"
        target="_blank"
        className="font-semibold underline cursor-pointer"
      >
        Terms of Use
      </a>{' '}
      and confirm that you have read our{' '}
      <a href="/privacy" className="font-semibold underline cursor-pointer">
        Privacy and Cookie Statement
      </a>
      .
    </div>
  );
}
