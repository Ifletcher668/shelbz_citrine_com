import { useEffect, useState } from 'react';

/**
 * Use to apply animations or transitions to components
 * Sets a timeout value on on mount to show styles before leaving the DOM
 * @param isMounted A boolean value indicating that the component is set to mount
 * @param delayTime The duration the component should wait before unmounting
 */
const useDelayedUnmount = (isMounted: boolean, delayTime: number): boolean => {
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }

    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);

  return shouldRender;
};

export default useDelayedUnmount;
