import { useEffect, useRef } from 'react';
import { useState } from 'react';

import styled, { css } from 'styled-components';

import { useThemeContext } from '../contexts/ThemeContext';
import { useDelayedUnmount } from '../utils/hooks';
import { fadeIn, fadeOut } from '../utils/styled-components/snippets';

import Icon from './Icon';
import UnstyledButton from './UnstyledButton';
import VisuallyHidden from './VisuallyHidden';

export default function SettingsButton() {
  return (
    <Wrapper id="settings-button">
      <SubNav />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000000;
  margin: 1rem;
  border-radius: 50%;

  svg:hover {
    color: var(--color-700);
  }
`;

const SubNav = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const ThemeContext = useThemeContext();
  const shouldRender = useDelayedUnmount(showSubmenu, 250);
  const ref = useRef(null);

  // Close submenu on click outside
  useEffect(() => {
    const handleClickOutside = event => {
      /* Typecasting to Node here, as explained in this StackOverflow answer:
        https://stackoverflow.com/questions/61164018/typescript-ev-target-and-node-contains-eventtarget-is-not-assignable-to-node#:~:text=Short%20answer%3A%20It%27s,this%20PR.
      */
      if (ref.current && !ref.current.contains(event.target)) {
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
    const handleEscapeKeyPress = event => {
      if (event.key === 'Escape') setShowSubmenu(false);
    };

    document.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    };
  });

  return (
    <SubNavWrapper
      ref={ref}
      onClick={() => {
        setShowSubmenu(!showSubmenu);
      }}
    >
      <VisuallyHidden>{showSubmenu ? 'Hide' : 'Show'} Settings:</VisuallyHidden>{' '}
      <Icon id="gear" size={48} strokeWidth={1} tabIndex={0} />
      {shouldRender ? (
        <SubNavMenu isMounted={showSubmenu} duration={250}>
          <UnstyledButton
            onClick={() => ThemeContext.changeColorScheme('moon')}
            key={'moon'}
          >
            Moon
          </UnstyledButton>
          <UnstyledButton
            onClick={() => ThemeContext.changeColorScheme('ocean')}
            key={'ocean'}
          >
            Ocean
          </UnstyledButton>
          <UnstyledButton
            onClick={() => ThemeContext.changeColorScheme('bloodMoon')}
            key={'bloodMoon'}
          >
            Blood Moon
          </UnstyledButton>
          <UnstyledButton
            onClick={() => ThemeContext.changeColorScheme('harvestMoon')}
            key={'harvestMoon'}
          >
            Harvest Moon
          </UnstyledButton>
        </SubNavMenu>
      ) : (
        <></>
      )}
    </SubNavWrapper>
  );
};

const SubNavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2vw + 1rem, 48px);

  ${({ isMounted, duration }) => css`
    animation: ${isMounted ? fadeIn : fadeOut} ${duration}ms ease-in-out;
  `}

  background-color: var(--header-background);
  box-shadow: var(--focus-shadow);
  border-radius: 5px 5px 0 0;

  position: absolute;
  bottom: 48px;
  left: 0;
  min-width: 100%;
  padding: 1rem;
`;

const SubNavWrapper = styled.div`
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

  ${UnstyledButton} {
    font-weight: 700;
    color: var(--font-secondary);
    &:hover,
    &:focus {
      color: var(--font-primary);
    }
  }

  @keyframes spinClockwise {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes spinCounterClockwise {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  ${Icon} {
    cursor: pointer;

    &:hover {
      color: var(--font-accent);
    }

    &:focus {
      animation: 1.5s spinClockwise ease-out;
    }
  }
`;
