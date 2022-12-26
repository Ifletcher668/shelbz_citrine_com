import type { CSSProperties } from 'react';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import Icon from '~components/Icon';
import UnstyledButton from '~components/UnstyledButton';
import VisuallyHidden from '~components/VisuallyHidden';
import type { ROUTES } from '~utils/constants';
import { fadeIn } from '~utils/styled-components/snippets';

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
  const ref = useRef<null | HTMLButtonElement>(null);

  // Close submenu on click outside
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
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

  // TODO: find permanent solution here: https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript
  const style = {
    '--display': showSubmenu ? 'flex' : 'none',
  } as CSSProperties;

  return (
    <SubNavWrapper ref={ref} onClick={() => setShowSubmenu(!showSubmenu)}>
      <VisuallyHidden>
        {showSubmenu ? 'Hide' : 'Show'} Sub menu for:
      </VisuallyHidden>{' '}
      {display}
      <Icon id={showSubmenu ? 'chevron-up' : 'chevron-down'} strokeWidth={2} />
      <SubNavMenu style={style}>
        {items.map(item => (
          <Link key={item.display} href={item.href}>
            {item.display}
          </Link>
        ))}
      </SubNavMenu>
    </SubNavWrapper>
  );
};

export default SubNav;

const SubNavMenu = styled.nav`
  display: var(--display, 'flex');
  flex-direction: column;
  gap: clamp(16px, 2vw + 1rem, 48px);

  background-color: var(--header-background);
  animation: ${fadeIn} 500ms ease-in-out;
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
