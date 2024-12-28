import type { FlattenSimpleInterpolation } from 'styled-components';
import styled, { css } from 'styled-components';

import { BREAKPOINTS } from 'utils/constants';

type SpacerProps = {
  top?: number | number[] | boolean;
  bottom?: number | number[] | boolean;
  left?: number | number[] | boolean;
  right?: number | number[] | boolean;
};

const DEFAULT_SPACING = '24px';

const calc = (value?: number | number[] | boolean): string | string[] => {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  if (Array.isArray(value)) {
    return value.map(v => `${v}px`);
  }

  return value === true ? DEFAULT_SPACING : '0';
};

const generateMediaQueries = (
  side: 'top' | 'bottom' | 'left' | 'right',
  paddingValues?: string | string[],
): string | FlattenSimpleInterpolation => {
  if (!Array.isArray(paddingValues)) {
    return '';
  }

  const [
    defaultPadding,
    largePhonePadding,
    tabletPadding,
    laptopPadding,
    desktopPadding,
  ] = paddingValues;

  switch (side) {
    case 'top':
      return css`
        padding-top: ${defaultPadding};

        @media ${BREAKPOINTS.LARGE_PHONE} {
          padding-top: ${largePhonePadding};
        }
        @media ${BREAKPOINTS.TABLET} {
          padding-top: ${tabletPadding};
        }
        @media ${BREAKPOINTS.LAPTOP} {
          padding-top: ${laptopPadding || tabletPadding};
        }
        @media ${BREAKPOINTS.DESKTOP} {
          padding-top: ${desktopPadding || laptopPadding};
        }
      `;
    case 'bottom':
      return css`
        padding-bottom: ${defaultPadding};

        @media ${BREAKPOINTS.LARGE_PHONE} {
          padding-bottom: ${largePhonePadding};
        }
        @media ${BREAKPOINTS.TABLET} {
          padding-bottom: ${tabletPadding};
        }
        @media ${BREAKPOINTS.LAPTOP} {
          padding-bottom: ${laptopPadding || tabletPadding};
        }
        @media ${BREAKPOINTS.DESKTOP} {
          padding-bottom: ${desktopPadding || laptopPadding};
        }
      `;
    case 'left':
      return css`
        padding-left: ${defaultPadding};

        @media ${BREAKPOINTS.LARGE_PHONE} {
          padding-left: ${largePhonePadding};
        }
        @media ${BREAKPOINTS.TABLET} {
          padding-left: ${tabletPadding};
        }
        @media ${BREAKPOINTS.LAPTOP} {
          padding-left: ${laptopPadding || tabletPadding};
        }
        @media ${BREAKPOINTS.DESKTOP} {
          padding-left: ${desktopPadding || laptopPadding};
        }
      `;
    case 'right':
      return css`
        padding-right: ${defaultPadding};

        @media ${BREAKPOINTS.LARGE_PHONE} {
          padding-right: ${largePhonePadding};
        }
        @media ${BREAKPOINTS.TABLET} {
          padding-right: ${tabletPadding};
        }
        @media ${BREAKPOINTS.LAPTOP} {
          padding-right: ${laptopPadding || tabletPadding};
        }
        @media ${BREAKPOINTS.DESKTOP} {
          padding-right: ${desktopPadding || laptopPadding};
        }
      `;
    default:
      return '';
  }
};

const Spacer = styled.div<SpacerProps>`
  ${({ top }) =>
    Array.isArray(top)
      ? css`
          ${generateMediaQueries('top', calc(top))}
        `
      : css<SpacerProps>`
          padding-top: ${({ top }) => calc(top)};
        `}

  ${({ bottom }) =>
    Array.isArray(bottom)
      ? css`
          ${generateMediaQueries('bottom', calc(bottom))}
        `
      : css<SpacerProps>`
          padding-bottom: ${({ bottom }) => calc(bottom)};
        `}
          
          ${({ left }) =>
    Array.isArray(left)
      ? css`
          ${generateMediaQueries('left', calc(left))}
        `
      : css<SpacerProps>`
          padding-left: ${({ left }) => calc(left)};
        `}

  ${({ right }) =>
    Array.isArray(right)
      ? css`
          ${generateMediaQueries('right', calc(right))}
        `
      : css<SpacerProps>`
          padding-right: ${({ right }) => calc(right)};
        `}
`;

export default Spacer;
