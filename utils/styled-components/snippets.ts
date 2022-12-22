import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const open = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-35px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
