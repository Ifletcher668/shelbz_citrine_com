import styled from 'styled-components';

type SpacerProps = {
  top?: number | boolean;
  bottom?: number | boolean;
  left?: number | boolean;
  right?: number | boolean;
  horizontal?: number | boolean;
  vertical?: number | boolean;
  all?: number | boolean;
};

const defaultSpacing = '24px';

const Spacer = styled.div<SpacerProps>`
  padding: ${({ all }) =>
    typeof all === 'number' ? `${all}px` : all === true ? defaultSpacing : 0};

  /* Vertical values do not set left/right to avoid override */
  padding-top: ${({ vertical }) =>
    typeof vertical === 'number'
      ? `${vertical}px`
      : vertical === true
      ? defaultSpacing
      : 0};
  padding-bottom: ${({ vertical }) =>
    typeof vertical === 'number'
      ? `${vertical}px`
      : vertical === true
      ? defaultSpacing
      : 0};

  /* Horizontal values do not set  top/bottom to avoid override */
  padding-left: ${({ horizontal }) =>
    typeof horizontal === 'number'
      ? `${horizontal}px`
      : horizontal === true
      ? defaultSpacing
      : 0};
  padding-right: ${({ horizontal }) =>
    typeof horizontal === 'number'
      ? `${horizontal}px`
      : horizontal === true
      ? defaultSpacing
      : 0};

  /* Individual values take precedence over all */
  padding-top: ${({ top }) =>
    // prettier-ignore
    typeof top === 'number' 
      ? `${top}px` 
      : top === true 
      ? defaultSpacing 
      : 0};
  padding-bottom: ${({ bottom }) =>
    typeof bottom === 'number'
      ? `${bottom}px`
      : bottom === true
      ? defaultSpacing
      : 0};
  padding-left: ${({ left }) =>
    typeof left === 'number'
      ? `${left}px`
      : left === true
      ? defaultSpacing
      : 0};
  padding-right: ${({ right }) =>
    typeof right === 'number'
      ? `${right}px`
      : right === true
      ? defaultSpacing
      : 0};
`;

export default Spacer;
