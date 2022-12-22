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
  margin: ${({ all }) =>
    typeof all === 'number' ? `${all}px` : all === true ? defaultSpacing : 0};

  /* Vertical values do not set left/right to avoid override */
  margin-top: ${({ vertical }) =>
    typeof vertical === 'number'
      ? `${vertical}px`
      : vertical === true
      ? defaultSpacing
      : 0};
  margin-bottom: ${({ vertical }) =>
    typeof vertical === 'number'
      ? `${vertical}px`
      : vertical === true
      ? defaultSpacing
      : 0};

  /* Horizontal values do not set  top/bottom to avoid override */
  margin-left: ${({ horizontal }) =>
    typeof horizontal === 'number'
      ? `${horizontal}px`
      : horizontal === true
      ? defaultSpacing
      : 0};
  margin-right: ${({ horizontal }) =>
    typeof horizontal === 'number'
      ? `${horizontal}px`
      : horizontal === true
      ? defaultSpacing
      : 0};

  /* Individual values take precedence over all */
  margin-top: ${({ top }) =>
    // prettier-ignore
    typeof top === 'number' 
      ? `${top}px` 
      : top === true 
      ? defaultSpacing 
      : 0};
  margin-bottom: ${({ bottom }) =>
    typeof bottom === 'number'
      ? `${bottom}px`
      : bottom === true
      ? defaultSpacing
      : 0};
  margin-left: ${({ left }) =>
    typeof left === 'number'
      ? `${left}px`
      : left === true
      ? defaultSpacing
      : 0};
  margin-right: ${({ right }) =>
    typeof right === 'number'
      ? `${right}px`
      : right === true
      ? defaultSpacing
      : 0};
`;

export default Spacer;
