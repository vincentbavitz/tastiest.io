import classNames from 'classnames';

interface Props {
  center?: boolean;
}

export function SignInTosInfo({ center }: Props) {
  return (
    <div className={classNames('text-xs opacity-50', center && 'text-center')}>
      By proceeding, you agree to our{' '}
      <a
        href="/terms-of-use"
        target="_blank"
        rel="noreferrer"
        className="font-semibold cursor-pointer hover:underline"
      >
        Terms of Use
      </a>{' '}
      and confirm that you have read our{' '}
      <a
        href="/privacy"
        target="_blank"
        rel="noreferrer"
        className="font-semibold cursor-pointer hover:underline"
      >
        Privacy and Cookie Statement
      </a>
      .
    </div>
  );
}
