import { useEffect, useRef } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { CSSObject } from 'styled-components';

import { useHeaderContext } from 'contexts/HeaderContext';
import { useNavbarContext } from 'contexts/NavbarContext';
import { BREAKPOINTS, NAVIGATION_LINKS, ROUTES } from 'utils/constants';
import { slideDown } from 'utils/styled-components/snippets';

const NavContent = () => {
  const { navbarPathProps } = useNavbarContext();
  const { isSubmenuOpen, setIsSubmenuOpen } = useHeaderContext();
  const router = useRouter();

  const determineActiveRoute = (path: string) => {
    return router.asPath.includes(path);
  };

  const menuRef = useRef<HTMLLIElement | null>(null);

  // TODO: Breaks the menu on mobile because why the fuck wouldn't it?
  // Fix.
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  //       setIsSubmenuOpen(false);
  //     }
  //   };

  //   document.addEventListener('click', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, [setIsSubmenuOpen]);

  return (
    <>
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
                  <ListItem key={subLink} isActive={false} mobileOnly={false}>
                    <Link href={`${ROUTES.GALLERY}/${subLink}`}>{subLink}</Link>
                  </ListItem>
                ))}
              </SubmenuItems>
            </SubmenuListItem>
          );
        }

        return (
          <ListItem
            isActive={isActive}
            key={link.href}
            mobileOnly={link.mobileOnly || false}
          >
            <Link href={link.href}>{link.label}</Link>
          </ListItem>
        );
      })}
    </>
  );
};

export default NavContent;

const SubmenuListItem = styled.li<{ isActive: boolean }>`
  position: relative;

  border-bottom: ${({ isActive }) =>
    isActive ? '2px solid var(--font-secondary-accent)' : 'none'};
`;

const ListItem = styled.li<{ mobileOnly: boolean; isActive: boolean }>`
  @media ${BREAKPOINTS.LAPTOP} {
    display: ${({ mobileOnly }) => (mobileOnly ? 'none' : 'list-item')};

    border-bottom: ${({ isActive }) =>
      isActive ? '2px solid var(--font-secondary-accent)' : 'none'};
  }
`;

const SubmenuItems = styled.ul`
  display: var(--display);
  animation: ${slideDown} 0.2s ease-in-out;
  list-style: none;

  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media ${BREAKPOINTS.LAPTOP} {
    position: absolute;
    top: 60px;
    left: 0;

    background: var(--background-secondary);
    border: 1px solid var(--background);
    border-top: none;
    border-radius: 5px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;

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

  @media ${BREAKPOINTS.LAPTOP} {
    font-size: var(--header-font-size);
  }
`;
