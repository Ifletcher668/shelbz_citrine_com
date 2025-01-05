import { motion } from 'motion/react';
import styled from 'styled-components';

import { BREAKPOINTS } from 'utils/constants';

const StyledMainWrapper = styled.main`
  background: var(--background-secondary);

  display: flex;
  flex-direction: column;
  gap: 48px;

  /* Ensure image content that hasn't loaded yet doesn't squish this container */
  min-height: 100vh;

  padding: var(--spacing-16);
  padding-top: var(--spacing-24);
  padding-bottom: calc(var(--spacing-48) * 3);

  @media ${BREAKPOINTS.LAPTOP} {
    padding-left: var(--spacing-48);
    padding-right: var(--spacing-48);
  }

  @media ${BREAKPOINTS.DESKTOP} {
    padding-left: calc(var(--spacing-48) * 3);
    padding-right: calc(var(--spacing-48) * 3);
  }

  border: 2px solid var(--font-secondary-accent);
  border-radius: 2px;
`;

const MainWrapper = motion(StyledMainWrapper);

export default MainWrapper;
