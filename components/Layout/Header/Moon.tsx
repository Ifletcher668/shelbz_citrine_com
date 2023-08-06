import styled from 'styled-components';

import { BREAKPOINTS } from '../../../utils/constants';

const Moon = styled.div`
  position: fixed;
  top: -30px;
  right: -70px;
  border-radius: 50%;
  background: var(--moon-gradient);
  box-shadow: var(--moon-shadow);
  transition: var(--transition);

  /* Increase size on mobile because vw scales too quickly at smaller sizes */
  width: calc(var(--moon-size) + 12vw);
  height: calc(var(--moon-size) + 12vw);
  max-width: 420px;
  max-height: 420px;

  @media ${BREAKPOINTS.TABLET} {
    width: var(--moon-size);
    height: var(--moon-size);
    top: -50px;
  }

  @media ${BREAKPOINTS.LAPTOP} {
    top: -100px;
    right: -85px;
    z-index: 1;
  }

  @media ${BREAKPOINTS.DESKTOP} {
    /* Adjust position to be closer to rest of menu */
    top: -130px;
    right: -20px;
  }
`;

export default Moon;
