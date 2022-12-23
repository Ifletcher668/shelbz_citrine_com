import styled from 'styled-components';

import { BREAKPOINTS } from '~utils/constants';

const Moon = styled.div`
  display: none;

  @media ${BREAKPOINTS.LAPTOP} {
    display: revert;
    position: fixed;
    top: -100px;
    right: -60px;
    z-index: 1;
    width: var(--moon-size);
    height: var(--moon-size);
    border-radius: 50%;
    background: var(--accent);
    box-shadow: var(--accent-shadow);
    transition: var(--transition);
  }

  @media ${BREAKPOINTS.DESKTOP} {
    /* Adjust position to be closer to rest of menu */
    top: -130px;
    right: -20px;
  }
`;

export default Moon;
