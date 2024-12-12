import Link from 'next/link';
import type { CSSObject } from 'styled-components';
import styled from 'styled-components';

import { useHeaderContext } from 'contexts/HeaderContext';
import { useNavbarContext } from 'contexts/NavbarContext';
import { BREAKPOINTS, NAVIGATION_LINKS, ROUTES } from 'utils/constants';
import { slideDown } from 'utils/styled-components/snippets';

const NavContent = () => {
  const { navbarPathProps } = useNavbarContext();
  const { isSubmenuOpen, setIsSubmenuOpen } = useHeaderContext();

  return (
    <>
      {NAVIGATION_LINKS.map(link => {
        if (link.hasSubmenu) {
          return (
            <SubmenuListItem
              key={link.href}
              onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
            >
              <SubmenuToggleButton>{link.label}</SubmenuToggleButton>

              <SubmenuItems
                style={
                  {
                    '--display': isSubmenuOpen ? 'flex' : 'none',
                    '--animation': isSubmenuOpen
                      ? 'slideDown 0.3s ease-in-out'
                      : '',
                  } as CSSObject
                }
              >
                {navbarPathProps.map(subLink => (
                  <Link href={`${ROUTES.GALLERY}/${subLink}`} key={1}>
                    {subLink}
                  </Link>
                ))}
              </SubmenuItems>
            </SubmenuListItem>
          );
        }

        return (
          <ListItem key={link.href} mobileOnly={link.mobileOnly || false}>
            <Link href={link.href}>{link.label}</Link>
          </ListItem>
        );
      })}
    </>
  );
};

export default NavContent;

const SubmenuListItem = styled.li`
  position: relative;
`;

const ListItem = styled.li<{ mobileOnly: boolean }>`
  @media ${BREAKPOINTS.LAPTOP} {
    display: ${({ mobileOnly }) => (mobileOnly ? 'none' : 'list-item')};
  }
`;

const SubmenuItems = styled.div`
  display: var(--display);
  animation: ${slideDown} 0.5s ease-in-out;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media ${BREAKPOINTS.LAPTOP} {
    position: absolute;
    top: 80px;
    left: 0;

    background: var(--header-background);
    padding-left: var(--spacing-extra-small);
    padding-bottom: var(--spacing-extra-small);
    padding-right: var(--spacing-extra-large);
  }
`;

const SubmenuToggleButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-extra-small);

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
    color: var(--font-accent);
    cursor: pointer;
  }

  @media (prefers-reduced-motion) {
    transition: none;
  }

  @media ${BREAKPOINTS.LAPTOP} {
    font-size: var(--header-font-size);
  }
`;
