import styled, { css } from 'styled-components';

type SpacerProps = {
  top?: number | boolean;
  bottom?: number | boolean;
  left?: number | boolean;
  right?: number | boolean;
  horizontal?: number | boolean;
  vertical?: number | boolean;
  all?: number | boolean;
};

const DEFAULT_SPACING = '24px';

const Spacer = styled.div<SpacerProps>`
  padding: ${({ all }) =>
    typeof all === 'number' ? `${all}px` : all === true ? DEFAULT_SPACING : 0};

  /* Vertical values do not set left/right to avoid override */
  padding-top: ${({ vertical }) =>
    typeof vertical === 'number'
      ? `${vertical}px`
      : vertical === true
      ? DEFAULT_SPACING
      : 0};
  padding-bottom: ${({ vertical }) =>
    typeof vertical === 'number'
      ? `${vertical}px`
      : vertical === true
      ? DEFAULT_SPACING
      : 0};

  /* Horizontal values do not set  top/bottom to avoid override */
  padding-left: ${({ horizontal }) =>
    typeof horizontal === 'number'
      ? `${horizontal}px`
      : horizontal === true
      ? DEFAULT_SPACING
      : 0};
  padding-right: ${({ horizontal }) =>
    typeof horizontal === 'number'
      ? `${horizontal}px`
      : horizontal === true
      ? DEFAULT_SPACING
      : 0};

  /* Individual values take precedence over all */
  ${({ top }) => {
    return (
      top &&
      css<SpacerProps>`
        padding-top: ${({ top }) =>
          // prettier-ignore
          typeof top === 'number' 
      ? `${top}px` 
      : top === true 
      ? DEFAULT_SPACING 
      : 0};
      `
    );
  }}

  ${({ bottom }) => {
    return (
      bottom &&
      css<SpacerProps>`
        padding-bottom: ${({ bottom }) =>
          typeof bottom === 'number'
            ? `${bottom}px`
            : bottom === true
            ? DEFAULT_SPACING
            : 0};
      `
    );
  }}
  
  
  ${({ left }) => {
    return (
      left &&
      css<SpacerProps>`
        padding-left: ${({ left }) =>
          typeof left === 'number'
            ? `${left}px`
            : left === true
            ? DEFAULT_SPACING
            : 0};
      `
    );
  }}
  
  
   ${({ right }) => {
    return (
      right &&
      css<SpacerProps>`
        padding-right: ${({ right }) =>
          typeof right === 'number'
            ? `${right}px`
            : right === true
            ? DEFAULT_SPACING
            : 0};
      `
    );
  }}
`;

export default Spacer;
