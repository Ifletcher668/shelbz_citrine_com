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
`;

export default Moon;
