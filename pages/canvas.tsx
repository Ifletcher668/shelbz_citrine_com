import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import StarryCanvas from 'components/StarryCanvas';
import { ROUTES } from 'utils/constants';
import debounce from 'utils/functions/debounce';

const Canvas = () => {
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const mouseIdleTimer = useRef<NodeJS.Timeout | number | undefined | string>(
    undefined,
  );
  const idleTimeout = 1500;

  useEffect(() => {
    const handleMouseMove = () => {
      setIsMouseMoving(true);
      clearTimeout(mouseIdleTimer.current);
      mouseIdleTimer.current = setTimeout(() => {
        setIsMouseMoving(false);
      }, idleTimeout);
    };

    const debouncedHandleMouseMove = debounce(handleMouseMove, 100);

    window.addEventListener('mousemove', debouncedHandleMouseMove);

    return () => {
      window.removeEventListener('mousemove', debouncedHandleMouseMove);
      clearTimeout(mouseIdleTimer.current);
    };
  }, []);

  return (
    <>
      <ReturnButton href={ROUTES.HOME} shouldRender={isMouseMoving}>
        Return
      </ReturnButton>
      <StarryCanvas />
    </>
  );
};

const ReturnButton = styled(Link)<{ shouldRender: boolean }>`
  position: fixed;
  top: 25px;
  left: 25px;

  opacity: ${({ shouldRender }) => (shouldRender ? 1 : 0)};
  transition: all 1s ease;

  background: none;
  cursor: pointer;
  border: none;
  font-size: var(--font-size-double-extra-large);
  text-decoration: none;
  font-weight: 700;
  text-decoration: none;
  color: var(--font-secondary);
`;

export default Canvas;
