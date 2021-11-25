import { useGoogleOptimizeSPA } from 'google-optimize-react-hooks';
import React from 'react';

const Invite = () => {
  const [loading, variant] = useGoogleOptimizeSPA(
    'QxSvxhpzSeWxpCcvg9yYsg',
    '[customEventName]',
  );

  if (loading) return 'loading';

  if (variant === '0') {
    return <>'original experiment'</>;
  }

  if (variant === '1') {
    return 'first variant';
  }

  if (variant === '2') {
    return 'second variant';
  }
};

export default Invite;
