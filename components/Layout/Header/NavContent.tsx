import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import type { CSSObject } from 'styled-components';
import styled from 'styled-components';

import { useHeaderContext } from 'contexts/HeaderContext';
import { useNavbarContext } from 'contexts/NavbarContext';
import {
  BREAKPOINTS,
  BREAKPOINT_NUMBERS,
  NAVIGATION_LINKS,
  ROUTES,
} from 'utils/constants';
import { slideDown } from 'utils/styled-components/snippets';

const NavContent = () => {
  const { navbarPathProps } = useNavbarContext();
  const { isSubmenuOpen, setIsSubmenuOpen } = useHeaderContext();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const determineActiveRoute = (path: string) => {
    return router.asPath.includes(path);
  };

  const menuRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= BREAKPOINT_NUMBERS.LARGE_PHONE); // Set breakpoint for mobile
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close submenu when clicking outside of menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsSubmenuOpen(false);
      }
    };
    if (!isMobile) {
      // For desktop, add event listener for clicks outside
      document.addEventListener('click', handleClickOutside);
    }

    // Cleanup the event listener on unmount or when isMobile changes
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setIsSubmenuOpen, isMobile]);

  // Close submenu on Escape key press
  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsSubmenuOpen(false);
    };

    document.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, [setIsSubmenuOpen]);

  return (
    <>
      {/* Only displayed on mobile screens */}
      <HomeLink href={ROUTES.HOME}>Home</HomeLink>

      {NAVIGATION_LINKS.map(link => {
        const isActive = determineActiveRoute(link.href);

        if (link.href === ROUTES.GALLERY) {
          return (
            <SubmenuListItem ref={menuRef} isActive={isActive} key={link.href}>
              <SubmenuToggleButton
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
              >
                {link.label}
              </SubmenuToggleButton>

              <SubmenuItems
                style={
                  { '--display': isSubmenuOpen ? 'flex' : 'none' } as CSSObject
                }
              >
                {navbarPathProps.map(subLink => (
                  <ListItem key={subLink} isActive={false}>
                    <Link href={`${ROUTES.GALLERY}/${subLink}`}>{subLink}</Link>
                  </ListItem>
                ))}
              </SubmenuItems>
            </SubmenuListItem>
          );
        }

        return (
          <ListItem isActive={isActive} key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </ListItem>
        );
      })}
    </>
  );
};

export default NavContent;

const HomeLink = styled(Link)`
  @media ${BREAKPOINTS.LARGE_PHONE} {
    display: none;
  }
`;
const SubmenuListItem = styled.li<{ isActive: boolean }>`
  position: relative;

  border-bottom: ${({ isActive }) =>
    isActive ? '2px solid var(--font-secondary-accent)' : 'none'};
`;

const ListItem = styled.li<{ isActive: boolean }>`
  border-bottom: ${({ isActive }) =>
    isActive ? '2px solid var(--font-secondary-accent)' : 'none'};
`;

const SubmenuItems = styled.ul`
  display: var(--display);
  animation: ${slideDown} 0.2s ease-in-out;
  list-style: none;

  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  position: absolute;
  top: 0;
  left: -165px;

  background: var(--background-secondary);
  border: 1px solid var(--background);

  padding-top: var(--spacing-32);
  padding-right: var(--spacing-40);
  padding-bottom: var(--spacing-32);
  padding-left: var(--spacing-32);

  @media ${BREAKPOINTS.LARGE_PHONE} {
    top: 60px;
    left: 0;
    padding-left: var(--spacing-32);
    padding-bottom: var(--spacing-32);
    padding-right: var(--spacing-40);
  }
`;

const SubmenuToggleButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-16);

  /* Styled to look like an anchor */
  background: none;
  font-size: var(--font-size-double-extra-large);
  text-decoration: none;
  font-weight: 700;
  text-decoration: none;
  color: var(--font-secondary);

  border: none;
  border-radius: 0;
  padding: 0;

  width: fit-content;

  transition-timing-function: ease-in-out;
  transition-duration: 500ms, 200ms;
  transition-property: color;

  &:hover {
    text-decoration: none;
    color: var(--font-secondary-accent);
    cursor: pointer;
  }

  @media (prefers-reduced-motion) {
    transition: none;
  }

  @media ${BREAKPOINTS.LARGE_PHONE} {
    font-size: var(--header-font-size);
  }
`;
