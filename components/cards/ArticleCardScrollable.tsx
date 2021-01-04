import React, { useContext } from 'react';
import { ScreenContext } from '../../contexts/screen';
import { Contained } from '../Contained';

interface Props {
  children: JSX.Element[];
}

export function ArticleCardScrollable(props: Props) {
  const { children } = props;

  const { isMobile } = useContext(ScreenContext);

  return (
    <>
      {isMobile ? (
        <div style={{ paddingLeft: '5vw' }} className="">
          <ScrollalbeInner {...props} />
        </div>
      ) : (
        <Contained>
          <ScrollalbeInner {...props} />
        </Contained>
      )}
    </>
  );
}

function ScrollalbeInner(props: Props) {
  const { children } = props;
  const { isMobile } = useContext(ScreenContext);

  return (
    <div className="flex overflow-x-auto scrollable-touch space-x-6 my-8 children:last:mr-6">
      {children.map(child => (
        <div
          key={child.key}
          style={{ minWidth: isMobile ? '15rem' : 'unset' }}
          className="w-1/4"
        >
          {child}
        </div>
      ))}
    </div>
  );
}
