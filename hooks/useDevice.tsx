import { useEffect, useState } from 'react';

export function useDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(null);

  useEffect(() => {
    const deviceAgent = navigator.userAgent.toLowerCase();
    const hasPointer = window.matchMedia('(pointer: coarse)').matches;

    if (
      hasPointer ||
      deviceAgent.match(/(iphone|ipod|ipad)/) ||
      deviceAgent.match(/(android)/) ||
      deviceAgent.match(/(iemobile)/) ||
      deviceAgent.match(/iphone/i) ||
      deviceAgent.match(/ipad/i) ||
      deviceAgent.match(/ipod/i) ||
      deviceAgent.match(/blackberry/i) ||
      deviceAgent.match(/bada/i)
    ) {
      setIsTouchDevice(true);
    } else {
      setIsTouchDevice(false);
    }
  }, []);

  console.log('useDevice ➡️ isTouchDevice:', isTouchDevice);

  return { isTouchDevice };
}
