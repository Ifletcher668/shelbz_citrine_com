import styled from 'styled-components';

import { BREAKPOINTS } from 'utils/constants';

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;

  background: var(--background-secondary);

  padding: var(--spacing-24);
  padding-top: var(--spacing-24);
  padding-bottom: calc(var(--spacing-48) * 3);

  @media ${BREAKPOINTS.LAPTOP} {
    padding-left: var(--spacing-48);
    padding-right: var(--spacing-48);
  }

  @media ${BREAKPOINTS.LAPTOP} {
    padding-left: calc(var(--spacing-48) * 3);
    padding-right: calc(var(--spacing-48) * 3);
  }

  border: 2px solid var(--font-secondary-accent);
  border-radius: 2px;

  gap: 48px;
`;

export default MainWrapper;
