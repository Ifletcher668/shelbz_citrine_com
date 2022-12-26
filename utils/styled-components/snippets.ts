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

export const shake = keyframes`
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(-8px);
  }
  20% {
    transform: translateX(8px);
  }
  30% {
    transform: translateX(-8px);
  }
  40% {
    transform: translateX(8px);
  }
  50% {
    transform: translateX(-8px);
  }
  60% {
    transform: translateX(8px);
  }
  70% {
    transform: translateX(-8px);
  }
  80% {
    transform: translateX(8px);
  }
  90% {
    transform: translateX(-8px);
  }
  100% {
    transform: translateX(8);
  }
`;
