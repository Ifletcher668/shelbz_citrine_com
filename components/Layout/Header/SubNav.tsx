import { useEffect, useRef } from 'react';
import { useState } from 'react';

import Link from 'next/link';
import styled, { css } from 'styled-components';

import Icon from '~components/Icon';
import UnstyledButton from '~components/UnstyledButton';
import VisuallyHidden from '~components/VisuallyHidden';
import type { ROUTES } from '~utils/constants';
import { useDelayedUnmount } from '~utils/hooks';
import { fadeIn, fadeOut } from '~utils/styled-components/snippets';

type Props = {
  display: string;
  items: {
    display: string;
    href: typeof ROUTES[keyof typeof ROUTES];
  }[];
};

const SubNav = (props: Props) => {
  // TODO: make 'items' accept only typeof ROUTES
  const { display, items } = props;
  const [showSubmenu, setShowSubmenu] = useState(false);
  const shouldRender = useDelayedUnmount(showSubmenu, 250);
  const ref = useRef<null | HTMLButtonElement>(null);

  // Close submenu on click outside
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      /* Typecasting to Node here, as explained in this StackOverflow answer:
        https://stackoverflow.com/questions/61164018/typescript-ev-target-and-node-contains-eventtarget-is-not-assignable-to-node#:~:text=Short%20answer%3A%20It%27s,this%20PR.
      */
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowSubmenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  // Close submenu on Escape key press
  useEffect(() => {
    // TODO: figure out how to do this only when SubNavWrapper is focused
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowSubmenu(false);
    };

    document.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    };
  });

  return (
    <SubNavWrapper ref={ref} onClick={() => setShowSubmenu(!showSubmenu)}>
      <VisuallyHidden>
        {showSubmenu ? 'Hide' : 'Show'} Sub menu for:
      </VisuallyHidden>{' '}
      {display}
      <Icon id={showSubmenu ? 'chevron-up' : 'chevron-down'} strokeWidth={2} />
      {shouldRender ? (
        <SubNavMenu isMounted={showSubmenu} duration={250}>
          {items.map(item => (
            <Link key={item.display} href={item.href}>
              {item.display}
            </Link>
          ))}
        </SubNavMenu>
      ) : (
        <></>
      )}
    </SubNavWrapper>
  );
};

export default SubNav;

type AnimationProps = {
  isMounted: boolean;
  duration: number;
};

const SubNavMenu = styled.nav<AnimationProps>`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2vw + 1rem, 48px);

  ${({ isMounted, duration }) => css`
    animation: ${isMounted ? fadeIn : fadeOut} ${duration}ms ease-in-out;
  `}

  background-color: var(--header-background);
  border-radius: 0 0 5px 5px;
  box-shadow: var(--focus-shadow);

  position: absolute;
  top: 45px;
  left: 0;
  min-width: 100%;
  padding: 1rem;
`;

const SubNavWrapper = styled(UnstyledButton)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
  font-size: var(--font-size, 1.125rem);
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  transition-duration: 250ms;
  transition-property: color;

  ${Icon} {
    pointer-events: none;
  }

  &:hover {
    color: var(--link-accent);
  }
`;
