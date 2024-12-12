import Icon from 'components/Icon';
import { useHeaderContext } from 'contexts/HeaderContext';
import { useNavbarContext } from 'contexts/NavbarContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { CSSObject } from 'styled-components';
import { BREAKPOINTS, NAVIGATION_LINKS, ROUTES } from 'utils/constants';
import { slideDown } from 'utils/styled-components/snippets';

const NavContent = () => {
  const { navbarPathProps } = useNavbarContext();
  const router = useRouter();
  const { isSubmenuOpen, setIsSubmenuOpen } = useHeaderContext();

  return (
    <>
      {NAVIGATION_LINKS.filter(link => link.href !== router.pathname).map(
        link => {
          if (link.hasSubmenu) {
            return (
              <Submenu
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
                  {navbarPathProps
                    .filter(subLink => !router.asPath.includes(subLink))
                    .map(subLink => (
                      <Link href={`${ROUTES.GALLERY}/${subLink}`} key={1}>
                        {subLink}
                      </Link>
                    ))}
                </SubmenuItems>
              </Submenu>
            );
          }

          return (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          );
        },
      )}
    </>
  );
};

export default NavContent;

const Submenu = styled.div`
  position: relative;
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
