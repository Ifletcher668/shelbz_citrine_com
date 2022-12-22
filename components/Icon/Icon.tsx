import React from 'react';

import { ChevronDown, ChevronUp, Menu, X } from 'react-feather';
import styled from 'styled-components';

const icons = {
  menu: Menu,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  close: X,
};

type Props = {
  id: keyof typeof icons;
  color?: string;
  size?: number;
  strokeWidth?: number;
};

const Icon = (props: Props) => {
  const { id, color, size, strokeWidth, ...delegated } = props;

  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ strokeWidth?: number }>`
  & > svg {
    display: block;
    stroke-width: ${({ strokeWidth }) =>
      strokeWidth !== undefined ? strokeWidth + 'px' : undefined};
  }
`;

export default styled(Icon)``;
